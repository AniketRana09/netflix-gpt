import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/UserSlice";
import { NET_COVER, USER_LOGO } from "../utils/Constants";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMessage, setErrMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    //validate form function
    const message = isSignInForm
      ? checkValidData(email.current.value, password.current.value)
      : checkValidData(
          email.current.value,
          password.current.value,
          name.current.value
        );
    setErrMessage(message);
    if (message) return;

    //Sign iN Sign Up Logic
    if (!isSignInForm) {
      //Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_LOGO,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setErrMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "->" + errorMessage);
        });
    } else {
      //Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "->" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="fixed">
        <img className="h-svh object-cover w-svw" src={NET_COVER} />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className=" absolute w-3/4 md:w-3/12 p-12 bg-black/80 mx-auto  my-36 right-0 left-0 text-white rounded-lg  "
      >
        <h2 className=" font-bold text-2xl md:text-4xl py-2 md:py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            className="p-4 my-4  w-full bg-black/60 rounded-md"
            placeholder="Full Name"
          />
        )}
        <input
          type="text"
          ref={email}
          className="p-4 my-4  w-full bg-black/60 rounded-md"
          placeholder="Email or mobile number"
        />

        <input
          type="password"
          ref={password}
          className="p-4 my-4 w-full  bg-black/60 rounded-md"
          placeholder="Password"
        />
        <p className=" text-red-500 mx-5 text-lg">{errMessage}</p>
        <button
          className="md:p-4 p-3 md:my-6 my-3 w-full bg-red-500 rounded-md"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="md:mx-5  cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign up Now!"
            : " Already a member !Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;

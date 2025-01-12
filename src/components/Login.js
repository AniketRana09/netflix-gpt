import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/Firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(false);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleButtonClick = () => {
    //Validate the form
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage + "-" + errorCode);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute inset-0 bg-cover bg-center bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/IN-en-20241104-TRIFECTA-perspective_55263ea2-af7f-40ed-9cf0-7029a9b9baf4_large.jpg')]"></div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute
       w-[450px] h-auto bg-black my-36 mx-auto right-0 left-0 p-8 rounded-lg bg-opacity-80 min-h[707px]"
      >
        <h1 className="font-bold text-3xl text-white mx-2 my-5 py-2 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className=" mx-2 my-2 p-3 w-10/12 h-14  bg-black bg-opacity-80 text-white  border border-white rounded-md"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or mobile number"
          className=" mx-2   my-2 p-3 w-10/12 h-14 bg-black bg-opacity-80 text-white border border-white rounded-md"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="mx-2   my-2 p-3 w-10/12  h-14 bg-black bg-opacity-80  text-white  border border-white rounded-md"
        />
        <p className="text-red-600 m-2 py-2 text-center w-10/12">
          {errorMessage}
        </p>
        <button
          className=" bg-red-600 text-white  mx-2 my-2 py-2 w-10/12 rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div>
          <label className="text-white p-2 mx-2 text-lg ">
            <input type="checkbox" name="Remember Me " />
            Remember Me
          </label>
        </div>
        {/* <p className="text-white m-2 py-2 text-center w-10/12"></p> */}
        <p
          className="text-white m-2 p-2 w-10/12 cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix?Sign up now."
            : "Already have account! Sign In"}
        </p>

        <p className="  text-wrap w-10/12 p-2 m-2 text-xs text-gray-400">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          Learn more..
        </p>
      </form>
    </div>
  );
};
export default Login;
// Netflix Sans, Helvetica Neue, Segoe UI, Roboto, Ubuntu, sans-serif;

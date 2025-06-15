import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errMessage, setErrMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const handleButtonClick = () => {
    //validate form function
    const message = checkValidData(
      email.current.value,
      password.current.value,
      name.current.value
    );
    console.log(message);
    setErrMessage(message);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="bg-gradient-to-bl from-black "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/6863f6e8-d419-414d-b5b9-7ef657e67ce4/web/IN-en-20250602-TRIFECTA-perspective_27a3fdfa-126f-4148-b153-55d60b51be6a_small.jpg"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className=" absolute w-3/12 p-12 bg-black/80 mx-auto  my-36 right-0 left-0 text-white rounded-lg  "
      >
        <h2 className=" font-bold text-4xl py-4">
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
          className="p-4 my-6  w-full bg-red-500 rounded-md"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="mx-5 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign up Now!"
            : " Already a member !Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;

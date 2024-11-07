import { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(false);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/IN-en-20241104-TRIFECTA-perspective_55263ea2-af7f-40ed-9cf0-7029a9b9baf4_large.jpg')",
        }}
      >
        {/* <img
          className=" bg-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/IN-en-20241104-TRIFECTA-perspective_55263ea2-af7f-40ed-9cf0-7029a9b9baf4_large.jpg"
          alt="Netflix Logo"
        /> */}
      </div>

      <form
        className="absolute
       w-3/12 bg-black my-36 mx-auto right-0 left-0 p-6 rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl text-white m-2 py-2 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className=" m-2 py-2 w-10/12  bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className=" m-2 py-2 w-10/12  bg-gray-700"
        />

        <input
          type="password"
          placeholder="Password"
          className="m-2  py-2 w-10/12   bg-gray-700 "
        />
        <button className=" bg-red-600 text-white  m-2 py-2 w-10/12 rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div>
          <label className="text-white p-2 m-2">
            <input type="checkbox" name="Remember Me " />
            Remember Me
          </label>
        </div>
        {/* <p className="text-white m-2 py-2 text-center w-10/12">
          Forgot Password?
        </p> */}
        <p
          className="text-white m-2 p-2 w-10/12 cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix?Sign up now."
            : "Already have account! Sign In"}
        </p>
      </form>
    </div>
  );
};
export default Login;

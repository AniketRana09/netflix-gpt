import React, { useEffect } from "react";
import { auth } from "../utils/Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/UserSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/Constants";
import { toggleGptSearchView } from "../utils/GptSlice";
import { changeLanguage } from "../utils/ConfigSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGpt = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearch = () => {
    //Togg;e Gpt Search
    dispatch(toggleGptSearchView());
  };
  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b  from-black rounded-b-md z-20 w-screen flex flex-col md:justify-between md:flex-row  ">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} />
      {user && (
        <div className="flex items-center md:items-center p-0 md:p-2 justify-between ">
          {showGpt && (
            <select
              className="bg-gray-800 p-2 m-4 text-white rounded-lg"
              onChange={handleLangChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="md:py-2 py-1 px-5 md:px-4 md:m-2 bg-purple-800 text-white rounded-lg m-2 "
            onClick={handleGptSearch}
          >
            {showGpt ? "Home Page" : "Gpt Search"}
          </button>

          <img
            alt="user-logo"
            className="h-14 hidden md:inline-block  mx-1 md:mx-3  p-2 rounded-2xl"
            src={user?.photoURL}
          />
          <h2 className="hidden md:inline-block text-lg font-semibold text-white">
            {user?.displayName}
          </h2>
          <button
            className="bg-red-500 text-white rounded-md md:py-2 py-1 px-5 md:px-4 md:m-2"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

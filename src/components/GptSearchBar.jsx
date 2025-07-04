import React, { useRef } from "react";
import lang from "../utils/LanguageConstants";
import { useDispatch, useSelector } from "react-redux";
import Openai from "../utils/Openai";
import { API_OPTIONS } from "../utils/Constants";
import { addGptMovieResult } from "../utils/GptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const ai = Openai;
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    const gptQuery =
      "Act as a Movie Recommendation sysytem and suggest movies for query :" +
      searchText.current.value +
      "Only give Names of 5 movies,comma separated with no extra space and newline characters .Example :Gaddar,Sholay,Don,khiladi,Singham";
    // Make an API CALL TO GET THE MOVIE RESULTS
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash-001",
      contents: gptQuery,
    });

    const gptText = response.text;
    const gptMovies = gptText.split(",").map((movie) => movie.trim());
    console.log(gptMovies);
    const PromiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResult = await Promise.all(PromiseArray);
    console.log(tmdbResult);
    dispatch(
      addGptMovieResult({ movieName: gptMovies, movieResults: tmdbResult })
    );
  };

  return (
    <div className="pt-[60%] md:pt-[10%] flex justify-center ">
      <form
        className="md:w-1/2 w-full bg-black grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className=" md:p-4  md:m-4 p-2 m-3 rounded-lg col-span-8 bg-white "
        />
        <button
          className="py-3  px-6 m-2 bg-red-500 text-white rounded-lg col-span-4"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { NET_COVER } from "../utils/Constants";

function GptSearch() {
  return (
    <>
      <div className="fixed -z-10 ">
        <img className="h-screen object-cover md:w-screen" src={NET_COVER} />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
}

export default GptSearch;

import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { NET_COVER } from "../utils/Constants";

function GptSearch() {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={NET_COVER} />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
}

export default GptSearch;

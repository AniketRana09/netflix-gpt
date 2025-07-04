import React from "react";
import { IMG_CDN_URL } from "../utils/Constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="md:w-52 w-36">
      <img alt="movieimg" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;

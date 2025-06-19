import React from "react";
import { IMG_CDN_URL } from "../utils/Constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-52">
      <img alt="movieimg" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;

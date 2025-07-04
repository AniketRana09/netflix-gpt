import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieName, movieResults } = useSelector((store) => store.gpt);
  if (!movieName || !movieResults) return null;
  return (
    <div className="p-4 my-4 bg-black/80 text-white flex justify-center w-full">
      <div className="w-full max-w-screen-xl">
        {movieName.map((movie, index) => (
          <MovieList key={movie} title={movie} movies={movieResults[index]} />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;

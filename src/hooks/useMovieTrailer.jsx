import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addTrailerVideo } from "../utils/MoviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  //fetching trailer vedio and updating store with trailer vedio
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter(
      (v) => v.type === "Trailer" && v.name === "Official Trailer"
    );
    const trailer = filterData.length ? filterData[0] : json.results[0];

    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;

import { useDispatch, useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VedioBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);

  return (
    <div className=" z-0 overflow-hidden scale-110">
      <iframe
        className="w-screen  aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?autoplay=1&mute=1&loop=1&playlist=" +
          trailerVideo?.key +
          "&controls=0&modestbranding=1&showinfo=0"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VedioBackground;

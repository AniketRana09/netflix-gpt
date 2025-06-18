import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryComponent from "./SecondaryContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      {/* {
        Main Container
        -VedioBackground
        -VedioTitle
        SecondaryContainer
        -MovieList*n
          -card*n
      } */}
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;

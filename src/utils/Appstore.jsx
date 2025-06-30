import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice";
import MoviesReducer from "./MoviesSlice";
import GptReducer from "./GptSlice";
import ConfigReducer from "./ConfigSlice";
const Appstore = configureStore({
  reducer: {
    user: UserReducer,
    movies: MoviesReducer,
    gpt: GptReducer,
    config: ConfigReducer,
  },
});
export default Appstore;

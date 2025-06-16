import { useState } from "react";
import Body from "./components/Body";
import { Provider } from "react-redux";
import Appstore from "./utils/Appstore";

function App() {
  return (
    <div>
      <Provider store={Appstore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;

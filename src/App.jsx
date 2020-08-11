import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams.jsx";
import { VideoBackground } from "./BackgroundVideo.jsx";
// import { Router } from "@reach/router";

const App = () => {
  return (
    <div>
      <h1 id="header">I P M</h1>
      <SearchParams path="/" />
      <VideoBackground path="/" />
    </div>
  );
};

render(<App />, document.getElementById("root"));

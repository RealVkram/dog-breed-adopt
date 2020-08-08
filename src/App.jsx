import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams.jsx";
import { VideoBackground } from "./BackgroundVideo.jsx";

const App = () => {
  return (
    <div>
      <h1 id="header">I P M</h1>
      <SearchParams />
      <VideoBackground />
    </div>
  );
};

render(<App />, document.getElementById("root"));

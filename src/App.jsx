import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams.jsx";

const App = () => {
  return (
    <div>
      <h1 id="header">Adopt me</h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));

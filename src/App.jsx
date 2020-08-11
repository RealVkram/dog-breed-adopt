import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams.jsx";

// import { Router } from "@reach/router";

const App = () => {
  return (
    <div>
      <h1 id="header">I P M</h1>
      <SearchParams path="/" />
    </div>
  );
};

render(<App />, document.getElementById("root"));

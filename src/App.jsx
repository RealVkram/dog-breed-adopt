import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams.jsx";

import { Router, Link } from "@reach/router";
import Details from "./details.js";

const App = () => {
  return (
    <div>
      <header style={{ marginLeft: 0 }}>
        <Link to="/">IPM</Link>
      </header>
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  );
};

render(<App />, document.getElementById("root"));
if (module.hot) {
  module.hot.accept();
}

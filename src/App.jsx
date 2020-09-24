import React, { useState } from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams.jsx";
import ThemeContext from "./ThemeContext";

import { Router, Link } from "@reach/router";
import Details from "./Details.js";

const App = () => {
  const themeHook = useState({
    buttonColor: "orange",
    modalColor: "pink",
  });

  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <header style={{ marginLeft: 0 }}>
          <Link to="/">IPM</Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

render(<App />, document.getElementById("root"));
if (module.hot) {
  module.hot.accept();
}

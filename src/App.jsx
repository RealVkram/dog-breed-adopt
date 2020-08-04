import React from "react";
import { render } from "react-dom";
import Pet from "./Pet.jsx";
import SearchParams from "./SearchParams.jsx";

const App = () => {
  return (
    <div>
      <h1 id="header">Adopt me!</h1>
      <SearchParams />
      <Pet name="luna" animal="Dog" breed="Havanese" />
      <Pet name="pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="doink" animal="Cat" breed="Mixed" />
    </div>
  );
};

render(<App />, document.getElementById("root"));

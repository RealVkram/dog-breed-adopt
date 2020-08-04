import React from "react";

const Pet = ({ name, animal, breed }) => {
  return (
    <div>
      <h1>{`${name.charAt(0).toUpperCase()}${name.slice(1).toLowerCase()}`}</h1>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
    </div>
  );
};

export default Pet;

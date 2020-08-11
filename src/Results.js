import React from "react";
import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No pets found</h1>
      ) : (
        pets.map(
          ({
            id,
            type,
            name,
            breeds: { primary },
            photos,
            contact: {
              address: { city, state },
            },
          }) => (
            <Pet
              key={id}
              animal={type}
              name={name}
              breed={primary}
              media={photos}
              location={`${city}, ${state}`}
              id={id}
            />
          )
        )
      )}
    </div>
  );
};

export default Results;

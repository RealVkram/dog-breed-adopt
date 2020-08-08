import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropDown from "./useDropDown";

const SearchParams = () => {
  const [breeds, setBreeds] = useState([]);
  const [location, setLocation] = useState("Seattle WA");
  const [animal, AnimalDropDown] = useDropDown("Animal", "dog", ANIMALS);
  const [breed, BreedDropDOWn, setBreed] = useDropDown("Breed", "", breeds);

  useEffect(() => {
    setBreeds([]);
    setBreed("");

    pet
      .breeds(animal)
      .then(({ breeds }) => {
        const breedType = breeds.map(({ name }) => name);
        setBreeds(breedType);
      })
      .catch(console.error);
  }, [animal, setBreed, setBreeds]);

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          <b>Location</b>
          <input
            type="text"
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <AnimalDropDown />
        <BreedDropDOWn />
        <div
          style={{
            display: "flex",
            flexFlow: "row-wrap",
            justifyContent: "space-evenly",
          }}
        >
          <button>Sign In</button>
          <button
            style={{
              backgroundColor: "grey",
              border: "none",
            }}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchParams;

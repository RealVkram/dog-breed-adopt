import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";

const SearchParams = () => {
  const [location, updateLocation] = useState("Seattle WA");
  const [animal, setAnimal] = useState("Dog");
  const [breed, setBreed] = useState("");
  const [breeds, setBreeds] = useState([]);

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
            onChange={(e) => updateLocation(e.target.value)}
          />
        </label>
        <label htmlFor="animal">
          <b>Animal</b>
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            <option value="All">All</option>
            {ANIMALS.map((val, idx) => (
              <option value={val} key={idx}>
                {val}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          <b>Breed</b>
          <select
            value={breed}
            id="breed"
            onChange={(e) => setBreed(e.target.value)}
            onBlur={(e) => setBreed(e.target.value)}
            disabled={!breeds.length}
          >
            <option value="All">All</option>
            {breeds.map((val, idx) => (
              <option value={val} key={idx}>
                {val}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;

import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropDown from "./useDropDown";
import { motion } from "framer-motion";

const SearchParams = () => {
  const [breeds, setBreeds] = useState([]);
  const [location, setLocation] = useState("Seattle WA");
  const [animal, AnimalDropDown] = useDropDown("Animal", "dog", ANIMALS);
  const [breed, BreedDropDOWn, setBreed] = useDropDown("Breed", "", breeds);
  const [pets, setPets] = useState([]);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal,
    });

    // const display = document.getElementById("display");

    setPets(animals || []);
  }

  useEffect(() => {
    setBreeds([]);
    setBreed("");

    pet
      .breeds(animal)
      .then(({ breeds: apiBreeds }) => {
        const breedType = apiBreeds.map(({ name }) => name);
        setBreeds(breedType);
      })
      .catch(console.error);
  }, [animal, setBreed, setBreeds]);

  return (
    <div className="search-params">
      <div id="display" style={{ margin: "10px" }}></div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
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
        {/* <div
          style={{
            display: "flex",
            flexFlow: "row-wrap",
            justifyContent: "space-evenly",
          }}
        >
          <button>Sign In</button> */}
        <motion.div whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }}>
          <button
            style={{
              backgroundColor: /*"hsl(120 90% 65%)"*/ "#67c18e",
              border: "2px solid hsl(120 80% 65%)",
              fontSize: "18px",
              fontWeight: 700,
              padding: "14px",
              boxSizing: "border-box",
              width: "120px",
              height: "50px",
              textAlign: "center",
              boxShadow: "0 1px 3px hsla(0 0% 0% .2)",
              letterSpacing: ".1em",
            }}
          >
            Submit
          </button>
        </motion.div>
        {/* </div> */}
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;

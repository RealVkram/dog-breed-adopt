import React from "react";

const SearchParams = () => {
  const location = ["Seattle WA", "Lagos Ng", "Asaba Delta"];

  return (
    <select name="" id="">
      {location.map((city, idx) => (
        <option value={location} key={idx}>
          {`${city.toUpperCase()}`}
        </option>
      ))}
    </select>
  );
};

export default SearchParams;

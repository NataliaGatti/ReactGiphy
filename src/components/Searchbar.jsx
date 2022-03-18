import React from "react";

const Searchbar = ({ searchFunction }) => {
  const handleUp = (event) => {
    searchFunction(event.target.value);
  };

  return (
    <input
      type="text"
      className="form-control form-search"
      onChange={handleUp}
    />
  );
}

export default Searchbar;
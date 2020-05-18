import React from "react";
import { FiSearch } from "react-icons/fi";

export const Search = ({ location, handleInput, handleKeyPress }) => {
  return (
    <section className="search-box">
      <input
        type="text"
        className="search-bar"
        name="location"
        onChange={handleInput}
        onKeyPress={handleKeyPress}
        value={location}
      />
      <FiSearch size="30" />
    </section>
  );
};

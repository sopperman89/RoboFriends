import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <input
      className="pa3 ba b--green bg-lightest-blue"
      type="search"
      placeholder="Search Here"
      onChange={searchChange}
    />
  );
};

export default SearchBox;

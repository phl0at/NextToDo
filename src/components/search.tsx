import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
const Search = () => {
  return (
    <div className="flex flex-row justify-evenly items-center">
      <button className="z-10 relative left-5">
        <FaMagnifyingGlass />
      </button>
      <input
        className="bg-black focus:outline-none focus:ring- rounded-md pl-6 text-white"
        type="text"
      />
    </div>
  );
};

export default Search;

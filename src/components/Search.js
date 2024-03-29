import React, { useContext } from "react";
import { VideosContext } from "@/context/VideosContext";

const Search = () => {
  const { setSearchTerm } = useContext(VideosContext);

  const handleSearchChange = (e) => {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search..."
      onChange={handleSearchChange}
      className="bg-gray-700 text-white border border-gray-600 px-4 py-2 rounded-md focus:outline-none focus:border-gray-500"
    />
  );
};

export default Search;

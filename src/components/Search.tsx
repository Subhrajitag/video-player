import React, { useContext } from "react";
import { VideoContextType, VideosContext } from "@/context/VideosContext";

const Search = () => {
  const { setSearchTerm } = useContext(VideosContext) as VideoContextType;

  return (
    <input
      type="text"
      placeholder="Search..."
      onChange={(e) => setSearchTerm(e.target.value)}
      className="bg-transparent text-[#333] border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-gray-500"
    />
  );
};

export default Search;

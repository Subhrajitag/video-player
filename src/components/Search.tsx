import React, { useContext, useEffect, useState } from "react";
import { VideoContextType, VideosContext } from "@/context/VideosContext";
import useDebounce from "@/hooks/useDebounce";

const Search = () => {
  const { setSearchTerm } = useContext(VideosContext) as VideoContextType;
  const [searchedTerm, setSearchedTerm] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchedTerm(e.target.value);
  const debouncedSearchTerm = useDebounce(searchedTerm, 500);

  useEffect(() => {
    setSearchTerm(debouncedSearchTerm);
  }, [debouncedSearchTerm, setSearchedTerm]);

  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchedTerm}
      onChange={handleChange}
      className="bg-transparent text-[#333] border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-gray-500"
    />
  );
};

export default Search;

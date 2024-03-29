import { VideosContext } from "@/context/VideosContext";
import React, { useContext } from "react";

const Filter = () => {
  const { setFilter,allVideosData } = useContext(VideosContext);
  const uniqueSubtitles = [...new Set(allVideosData?.map((video) => video.subtitle))];

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <select
    onChange={handleFilterChange}
    className="bg-white border border-gray-300 px-4 py-2 rounded-md shadow-sm w-full appearance-none "
  >
    <option value="">All Subtitles</option>
    {uniqueSubtitles.map((subtitle) => (
      <option key={subtitle} value={subtitle}>
        {subtitle}
      </option>
    ))}
  </select>
  );
};

export default Filter;

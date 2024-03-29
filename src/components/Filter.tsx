import { VideoContextType, VideosContext } from "@/context/VideosContext";
import { Video } from "@/types/VideoTypes";
import React, { useContext } from "react";

const Filter = () => {
  const { setFilter, allVideosData } = useContext(VideosContext) as VideoContextType;
  const uniqueSubtitles = Array.from(
    new Set(
      Array.isArray(allVideosData)
        ? allVideosData.map((video) => video.subtitle)
        : []
    )
  );

  return (
    <select
      onChange={(e) => setFilter(e.target.value)}
      className="bg-white border border-gray-300 px-4 py-2 rounded-md shadow-sm w-full appearance-none "
    >
      <option value="">All Subtitles</option>
      {uniqueSubtitles && (uniqueSubtitles as string[]).map((subtitle: string) => (
        <option key={subtitle} value={subtitle}>
          {subtitle}
        </option>
      ))}
    </select>
  );
};

export default Filter;

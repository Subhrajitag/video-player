import { VideoContextType, VideosContext } from "@/context/VideosContext";
import React, { useContext } from "react";

const Filter = () => {
  const { setFilter, allVideosData } = useContext(
    VideosContext
  ) as VideoContextType;
  const uniqueSubtitles = Array.from(
    new Set(
      Array.isArray(allVideosData)
        ? allVideosData.map((video) => video.subtitle)
        : []
    )
  );

  return (
    <div
      className="p-4"
      style={{ overflowX: "auto", whiteSpace: "nowrap" }}
    >
      <button
        className="bg-gray-200 text-black font-semibold border border-gray-300 text-[12px] px-4 py-2 rounded-full focus:outline-none hover:bg-gray-900 hover:text-white"
        onClick={() => setFilter("")}
      >
        All Subtitles
      </button>
      {/* <div> */}
      {uniqueSubtitles &&
        (uniqueSubtitles as string[]).map((subtitle: string) => (
          <button
            key={subtitle}
            className="bg-gray-200 font-semibold text-black border border-gray-300 text-[12px] px-4 py-2 rounded-full focus:outline-none hover:bg-gray-900 hover:text-white ml-4"
            onClick={() => setFilter(subtitle)}
          >
            {subtitle}
          </button>
        ))}
      {/* </div> */}
    </div>
  );
};

export default Filter;

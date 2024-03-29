import React from "react";
import Search from "./Search";

const Topbar = () => {
  return (
    <div className="bg-gray-800 py-4">
      <div className=" md:px-[1.5%] px-[3%] flex justify-between items-center">
        <div className="text-white font-bold text-lg">Video Player</div>
          <Search />
      </div>
    </div>
  );
};

export default Topbar;

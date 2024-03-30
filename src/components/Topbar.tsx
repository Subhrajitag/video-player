import React from "react";
import Search from "./Search";

const Topbar = () => {
  return (
    <div className="fixed z-40 top-0 w-full bg-blur border-b border-gray-200  py-4">
      <div className="px-5 lg:px-16 flex justify-between items-center">
        <div className="font-bold text-lg">Video Player</div>
        <Search />
      </div>
    </div>
  );
};

export default Topbar;

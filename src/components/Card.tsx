import React from "react";
import Image from "next/image";
import { Video } from "../types/VideoTypes";

interface CardProps {
  video: Video;
}
const Card = ({ video }: CardProps) => {
  return (
    <div className="flex items-center cursor-pointer px-3 py-2 text-black  hover:text-white duration-200 ease-in-out">
      {/* <Image
        src={video.img}
        className=" sm:w-[60px] sm:h-[60px] lg:w-[140px] lg:h-[80px] rounded-lg object-cover "
     
        alt={subtitle}
      /> */}

      <h3 className=" lg:text-base sm:text-xs">
        {video.title}
        <span className="block text-xs text-gray-500">{video.subtitle}</span>
      </h3>
    </div>
  );
};

export default Card;

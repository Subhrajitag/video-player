import React from "react";
import Image from "next/image";
import { Video } from "../types/VideoTypes";

interface CardProps {
  video: Video;
}
const Card = ({ video }: CardProps) => {
  return (
    <div className="flex items-start gap-x-3 cursor-pointer p-2 duration-200 ease-in-out">
      <Image
        src={`https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/${video.thumb}`}
        className=" sm:w-[60px] sm:h-[60px] lg:w-[140px] lg:h-[80px] w-[90px] h-[60px] rounded-lg object-cover "
        width={140}
        height={80}
     
        alt={video.title}
      />

      <h3 className=" lg:text-base sm:text-xs">
        {video.title}
        <span className="block text-xs text-gray-500">{video.subtitle}</span>
      </h3>
    </div>
  );
};

export default Card;

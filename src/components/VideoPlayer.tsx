import { Video } from "@/types/VideoTypes";
import React, { useState } from "react";

interface VideoPlayerProps {
  currentVideo: Video;
}
const VideoPlayer = ({ currentVideo }: VideoPlayerProps) => {
  const [isPlaying, SetPlaying] = useState(false);
  // const tl = new TimelineLite({ delay: 0.3 });

  // useEffect(() => {
  //   if (isPlaying) {
  //     tl.fromTo("#videoName", { y: 0, opacity: 1 }, { y: -20, opacity: 0 });
  //   } else {
  //     tl.fromTo("#videoName", { y: -20, opacity: 0 }, { y: 0, opacity: 1 });
  //   }
  // }, [isPlaying, currentVideo]);
  return (
    <div className="h-full md:m-6 m-3 ">
      <div className="relative rounded-lg cursor-pointer" id="videoContainer">
        <video
          onPlay={() => SetPlaying(true)}
          onPause={() => SetPlaying(false)}
          className="min-w-full min-h-full w-auto h-auto bg-cover rounded-xl shadow"
          controls
          src={currentVideo.sources}
          id="mainVideo"
        ></video>
        <div
          className="absolute top-0 left-0 z-10 w-full h-[40px] p-2 bg-gradient-to-b from-black to-transparent"
          id="videoName"
        >
          <h2 className="text-white text-xl">{currentVideo.title}</h2>
        </div>
      </div>
      <div className="text-xl font-medium my-3">
        {currentVideo.subtitle}
      </div>
      <div className="text-base">
        {currentVideo.description}
      </div>
    </div>
  );
};

export default VideoPlayer;

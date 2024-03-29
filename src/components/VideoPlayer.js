import React, { useState } from "react";

const VideoPlayer = ({ currentVideo }) => {
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
    <div className="w-3/4 h-full m-6">
    <div className="relative rounded-lg cursor-pointer" id="videoContainer">
      <video
        onPlay={() => SetPlaying(true)}
        onPause={() => SetPlaying(false)}
        className="min-w-full min-h-full w-auto h-auto bg-cover"
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
    <div className="text-xl mt-4">
      {/* Display video description */}
      {currentVideo.description}
    </div>
  </div>
  );
};

export default VideoPlayer;

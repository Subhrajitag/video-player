import { Video } from "@/types/VideoTypes";
import { getCookie, setCookie } from "cookies-next";
import React, { useEffect, useRef, useState } from "react";
import { FaCompass, FaExpand, FaPause, FaPlay, FaStop, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
interface VideoPlayerProps {
  currentVideo: Video;
}
const VideoPlayer = ({ currentVideo }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (currentVideo)
      document.title = `${currentVideo.title} | Video Player`;

    const videoDuration = getCookie('videoDuration');

    const videoDurationArray = videoDuration ? JSON.parse(videoDuration) : [];
    if (videoRef.current) {
      videoRef.current.onloadedmetadata = () => {
        const duration = videoRef.current?.duration;
        const currentTimestamp = videoRef.current?.currentTime;
        const video = {
          title: currentVideo.title,
          duration,
          currentTimestamp,
        };
        const videoIndex = videoDurationArray.findIndex(
          (video: { title: string }) => video.title === currentVideo.title
        );
        if (videoIndex === -1) {
          videoDurationArray.push(video);
        } else {
          videoDurationArray[videoIndex] = video;
        }
      };
    }
    const interval = setInterval(() => {
      console.log(currentVideo);

      if (videoRef.current) {
        const duration = videoRef.current?.duration;
        const currentTimestamp = videoRef.current?.currentTime;
        const video = {
          title: currentVideo.title,
          duration,
          currentTimestamp,
        };
        const videoIndex = videoDurationArray.findIndex(
          (video: { title: string }) => video.title === currentVideo.title
        );
        if (videoIndex === -1) {
          videoDurationArray.push(video);
        } else {
          videoDurationArray[videoIndex] = video;
        }
        setCookie('videoDuration', videoDurationArray);
      }
    }, 5000);

    if (videoDurationArray.length > 0) {
      const videoIndex = videoDurationArray.findIndex(
        (video: { title: string }) => video.title === currentVideo.title
      );
      if (videoIndex !== -1 && videoRef.current) {
        videoRef.current.currentTime =
          videoDurationArray[videoIndex].currentTimestamp;
      }
    }
    if (videoRef.current) {
      videoRef.current.play();
    }
    return () => clearInterval(interval);
  }, [currentVideo]);

  return (
    <div className="lg:w-1/2 md:w-3/5 xl:w-3/5 2xl:w-2/3 h-full md:m-6 m-3 ">
      <div className="video-container relative">
        <video
          ref={videoRef}
          key={currentVideo.sources}
          controls
          width="100%"
          className="rounded-md border"
        >
          <source src={currentVideo.sources} type="video/mp4" />
        </video>
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

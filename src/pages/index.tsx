import { Inter } from "next/font/google";
import VideoPlayer from "@/components/VideoPlayer";
import Card from "@/components/Card";
import Topbar from "@/components/Topbar";
import { useContext, useEffect, useState } from "react";
import { VideoContextType, VideosContext } from "@/context/VideosContext";
import Filter from "@/components/Filter";
import { Video } from "../types/VideoTypes";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { searchTerm, filter, allVideosData } = useContext(
    VideosContext
  ) as VideoContextType;
  const [videos, setVideos] = useState(allVideosData);

  const [currentlyActiveVideo, setCurrentlyActiveVideo] = useState(videos[0]);

  const filteredVideos = allVideosData?.filter((video: Video) => {
    if (!searchTerm && !filter) {
      return video;
    }

    if (searchTerm && !filter) {
      return video?.title.toLowerCase().includes(searchTerm.toLowerCase());
    }

    if (!searchTerm && filter) {
      return video?.subtitle === filter;
    }

    return (
      video?.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      video?.subtitle === filter
    );
  });

  useEffect(() => {
    setVideos(filteredVideos);
  }, [searchTerm, filter]);

  return (
    <main className={`w-full h-auto flex-col items-center  ${inter.className}`}>
      <Topbar />
      <div className="flex md:flex-row flex-col w-full h-auto lg:px-[2%] lg:mt-[4%] mt-[15%] ">
        <VideoPlayer currentVideo={currentlyActiveVideo} />
        <div className="border lg:w-1/2 md:w-3/5 xl:w-2/5 2xl:w-1/3 flex flex-col p-2 overflow-y-auto">
          <div className="w-full mb-4">
            <Filter />
          </div>
          {videos?.length > 0 ? (
            <>
              <h2 className="text-2xl font-semibold p-4 pt-0">Playlist</h2>
              <div className="h-[740px] overflow-y-auto overscroll-y-contain rounded-md border">
                {videos?.map((video: Video) => (
                  <div
                    key={video?.title}
                    onClick={() => setCurrentlyActiveVideo(video)}
                    className="mt-10 sm:mt-2 flex items-center cursor-pointer m-2 h-20 duration-200 ease-in-out rounded-lg hover:bg-neutral-100"
                  >
                    <Card video={video} />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center mt-[15%] text-red-600">
              No videos found
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

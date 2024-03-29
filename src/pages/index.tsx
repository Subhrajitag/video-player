import { Inter } from "next/font/google";
import VideoPlayer from "@/components/VideoPlayer";
import Card from "@/components/Card";
import Topbar from "@/components/Topbar";
import { useContext, useEffect, useState } from "react";
import { VideosContext } from "@/context/VideosContext";
import Filter from "@/components/Filter";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { searchTerm, filter, allVideosData } = useContext(VideosContext);
  const [videos, setVideos] = useState(allVideosData);


  const [currentlyActiveVideo, setCurrentlyActiveVideo] = useState({
    title: videos[0]?.title,
    sources: videos[0]?.sources,
    description: videos[0]?.description,
  });


  
  const filteredVideos = allVideosData.filter((video) => {
    if (!searchTerm && !filter) {
      return video;
    }

    if (searchTerm && !filter) {
      return video.title.toLowerCase().includes(searchTerm.toLowerCase());
    }

    if (!searchTerm && filter) {
      return video.subtitle === filter;
    }

    return (
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      video.subtitle === filter
    );
  });

  useEffect(() => {
    setVideos(filteredVideos);
  }, [searchTerm, filter]);

  return (
    <main className={`w-full flex-col items-center ${inter.className}`}>
      <Topbar />
      <div className="flex w-full h-full">
        <VideoPlayer currentVideo={currentlyActiveVideo} />
        <div className="w-1/3 flex flex-col p-2 bg-primary overflow-y-auto">
          <div className="w-full mb-4">
            <Filter />
          </div>
          <h2 className="text-2xl  font-semibold p-4  bg-gray-200 border-b-2 border-black">
            Playlist
          </h2>
          <div
            className=" bg-gray-200 overflow-y-auto overscroll-y-contain"
            style={{ maxHeight: "calc(100vh - 60px)" }}
          >
           
              {videos &&
                videos.map((video) => (
                  <div
                    key={video.title}
                    onClick={() =>
                      setCurrentlyActiveVideo({
                        title: video.title,
                        sources: video.sources,
                        description: video.description,
                      })
                    }
                    className="flex items-center cursor-pointer px-3 py-2 hover:bg-gray-900 hover:text-white duration-200 ease-in-out"
                  >
                    <Card
                      img={video.thumb}
                      title={video.title}
                      subtitle={video.subtitle}
                    />
                  </div>
                ))}
          </div>
        </div>
      </div>
    </main>
  );
}

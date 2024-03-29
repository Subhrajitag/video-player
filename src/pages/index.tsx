import { Inter } from "next/font/google";
import VideoPlayer from "@/components/VideoPlayer";
import Card from "@/components/Card";
import Topbar from "@/components/Topbar";
import { useContext, useEffect, useState } from "react";
import { VideoContextType, VideosContext } from "@/context/VideosContext";
import Filter from "@/components/Filter";
import { Video } from "../types/VideoTypes";
import { ReactSortable } from "react-sortablejs";

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  const { searchTerm, filter, allVideosData } = useContext(VideosContext) as VideoContextType;
  const [videos, setVideos] = useState(allVideosData);


  const [currentlyActiveVideo, setCurrentlyActiveVideo] = useState(videos[0]);


  const filteredVideos = allVideosData.filter((video: Video) => {
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
  // const [state, setState] = useState([{ id: "1", name: "shrek" }]);


  return (
    <main className={`w-full flex-col items-center  ${inter.className}`}>
      <Topbar />
      {/* <ReactSortable tag="ul" list={state} setList={setState}>
      {state.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ReactSortable> */}
      <div className="flex md:flex-row flex-col w-full h-full lg:px-[2%] ">
        <VideoPlayer currentVideo={currentlyActiveVideo} />
        <div className="lg:w-1/2 md:w-3/5 xl:w-2/5 2xl:w-1/3 flex flex-col p-2 overflow-y-auto">
          <div className="w-full mb-4">
            <Filter />
          </div>
          <h2 className="text-2xl font-semibold p-4 bg-gray-200 border-b-2 border-black">
            Playlist
          </h2>
          {videos?.length > 0 ?
            <div
              className=" bg-gray-200 overflow-y-auto overscroll-y-contain"
              style={{ maxHeight: "calc(100vh - 60px)" }}
            >

              {videos.map((video: Video) => (
                <div
                  key={video.title}
                  onClick={() =>
                    setCurrentlyActiveVideo(video)
                  }
                  className="flex items-center cursor-pointer py-2 hover:bg-gray-900 hover:text-white duration-200 ease-in-out"
                >
                  <Card video={video} />
                </div>
              ))}
            </div>
            : <div className="bg-gray-200 text-2xl font-semibold flex justify-center items-center text-center h-20 text-red-600">No videos found</div>
          }
        </div>
      </div>
    </main>
  );
}

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { VideosContext } from "@/context/VideosContext";
import allVideos from '../../public/db.json';

export default function App({ Component, pageProps }: AppProps) {
  const allVideosData = allVideos?.categories[0].videos.map(video => ({
    title: video.title,
    subtitle: video.subtitle,
    sources: video.sources[0],
    description: video.description,
    thumb: video.thumb
  }));
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filter, setFilter] = useState<string>('');
  return (
    <VideosContext.Provider
      value={{ searchTerm, setSearchTerm, filter, setFilter, allVideosData }}
    >
      <Component {...pageProps} />
    </VideosContext.Provider>
  );
}

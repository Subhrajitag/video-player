import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import { VideosContext } from "@/context/VideosContext";
import allVideos from '../public/db.json';

export default function App({ Component, pageProps }: AppProps) {
  const allVideosData = allVideos?.categories[0].videos;
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");

  return (
    <VideosContext.Provider
      value={{ searchTerm, setSearchTerm, filter, setFilter, allVideosData }}
    >
      <Component {...pageProps} />
    </VideosContext.Provider>
  );
}

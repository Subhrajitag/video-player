import { Video } from "@/types/VideoTypes";
import React, { createContext } from "react";

export interface VideoContextType {
  allVideosData: Video[];
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  searchTerm: string;
  filter: string;
}
export const VideosContext = createContext<VideoContextType | undefined>(
  undefined
);

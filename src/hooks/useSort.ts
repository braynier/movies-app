import { useState } from "react";
import { Movie } from "../types/movie";
import { SortOption } from "../types/sort";

export const useSort = () => {
  const [sortOption, setSortOption] = useState<SortOption>("no-sort");

  const sortMovies = (movies: Movie[]) => {
    if (sortOption === "no-sort") return movies;

    return [...movies].sort((a, b) => {
      switch (sortOption) {
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        case "premiered-asc":
          return (
            new Date(a.premiered).getTime() - new Date(b.premiered).getTime()
          );
        case "premiered-desc":
          return (
            new Date(b.premiered).getTime() - new Date(a.premiered).getTime()
          );
        default:
          return 0;
      }
    });
  };

  return { sortOption, setSortOption, sortMovies };
};

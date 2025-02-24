import { useState } from "react";
import { Movie } from "../types/movie";

export const useFilter = () => {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<string>("");

  const filterMovies = (movies: Movie[]) => {
    return movies.filter((movie) => {
      const genreMatch =
        selectedGenres.length === 0 ||
        selectedGenres.every((genre) => movie.genres.includes(genre));

      const statusMatch =
        selectedStatus === "All" ||
        !selectedStatus ||
        movie.status === selectedStatus;

      return genreMatch && statusMatch;
    });
  };

  return {
    selectedGenres,
    setSelectedGenres,
    selectedStatus,
    setSelectedStatus,
    filterMovies,
  };
};

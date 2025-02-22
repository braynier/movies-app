import { create } from "zustand";
import { MovieState } from "../types/movie";

export const useMovieStore = create<MovieState>((set) => ({
  movies: [],
  setMovies: (movies) => set({ movies }),
}));

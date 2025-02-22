import { getRequest } from "../services/apiTvMaze";
import { Movie } from "../types/movie";

export const moviesLoader = async (): Promise<Movie[]> => {
  const movies = await getRequest<Movie[]>("");
  return movies;
};

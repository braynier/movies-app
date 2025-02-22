import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { useMovieStore } from "../stores/movieStore";
import { Movie } from "../types/movie";
import MoviesList from "../components/MoviesList";

function Home() {
  const movies = useLoaderData() as Movie[];
  const { setMovies } = useMovieStore();

  // Update Zustand store after rendering
  // We are rendering as we fetch with loaders, instead of using useEffect for data fetching on render,
  // therefore we dont have data waterfalls here
  useEffect(() => {
    setMovies(movies);
  }, [movies, setMovies]);

  return <MoviesList movies={movies} itemsPerPage={8} />;
}

export default Home;

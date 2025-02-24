import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { useMovieStore } from "../stores/movieStore";
import { Movie } from "../types/movie";
import MoviesList from "../components/MoviesList";

function Home() {
  // We are rendering as we fetch with loaders, instead of using useEffect for data fetching on render,
  // therefore we don't have data waterfalls here, which is sweet
  const movies = useLoaderData() as Movie[];
  const { setMovies } = useMovieStore();

  // Update Zustand store after rendering
  useEffect(() => {
    setMovies(movies);
  }, [movies, setMovies]);

  return (
    <section>
      <MoviesList
        movies={movies}
        itemsPerPage={8}
        enableSorting={true}
        enableGenreFilter={true}
        enableStatusFilter={true}
      />
    </section>
  );
}

export default Home;

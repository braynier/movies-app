import { Movie } from "../types/movie";
import MovieItem from "./MovieItem";
import Pagination from "./Pagination";
import usePagination from "../hooks/usePagination";

interface MoviesListProps {
  movies: Movie[];
  itemsPerPage?: number;
}

const MoviesList = ({ movies, itemsPerPage }: MoviesListProps) => {
  const { currentItems, currentPage, totalPages, handlePageChange } =
    usePagination<Movie>({
      itemsPerPage: itemsPerPage || movies.length,
      data: movies,
    });

  const displayedMovies = itemsPerPage ? currentItems : movies;

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {displayedMovies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} summaryLength={80} />
        ))}
      </div>

      {itemsPerPage && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default MoviesList;

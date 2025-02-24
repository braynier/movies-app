import { Movie, MoviesListProps } from "../types/movie";
import MovieItem from "./MovieItem";
import Pagination from "./Pagination";
import usePagination from "../hooks/usePagination";
import { useSort } from "../hooks/useSort";
import { useFilter } from "../hooks/useFilter";
import GenresFilter from "./GenresFilter";
import StatusFilter from "./StatusFilter";
import Sort from "./Sort";

const MoviesList = ({
  movies,
  itemsPerPage,
  enableSorting = false,
  enableGenreFilter = false,
  enableStatusFilter = false,
}: MoviesListProps) => {
  const { sortOption, setSortOption, sortMovies } = useSort();
  const {
    selectedGenres,
    setSelectedGenres,
    selectedStatus,
    setSelectedStatus,
    filterMovies,
  } = useFilter();

  // Apply sorting and filtering
  const sortedMovies = enableSorting ? sortMovies(movies) : movies;
  const filteredMovies = filterMovies(sortedMovies);

  const { currentItems, currentPage, totalPages, handlePageChange } =
    usePagination<Movie>({
      itemsPerPage: itemsPerPage || filteredMovies.length,
      data: filteredMovies,
    });

  const displayedMovies = itemsPerPage ? currentItems : filteredMovies;

  // Extract unique genres for the genre filter
  const genres = enableGenreFilter
    ? Array.from(new Set(movies.flatMap((movie) => movie.genres)))
    : [];

  return (
    <div>
      {/* Render sorting and filtering components */}
      <div className="mb-10 flex flex-col gap-4 sm:flex-row">
        {enableSorting && (
          <Sort sortOption={sortOption} setSortOption={setSortOption} />
        )}
        {enableGenreFilter && (
          <GenresFilter
            genres={genres}
            selectedGenres={selectedGenres}
            setSelectedGenres={setSelectedGenres}
          />
        )}
        {enableStatusFilter && (
          <StatusFilter
            selectedStatus={selectedStatus}
            setSelectedStatus={setSelectedStatus}
          />
        )}
      </div>

      {/* Movie grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {displayedMovies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} summaryLength={100} />
        ))}
      </div>

      {/* Pagination */}
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

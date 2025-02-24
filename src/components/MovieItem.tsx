import { MovieItemProps } from "../types/movie";
import { Link } from "react-router-dom";
import { removeHtmlTags } from "./utils/removeHtmlTags";
import { useFavoritesStore } from "../stores/favoritesStore";
import { FaRegHeart } from "react-icons/fa";

const MovieItem = ({ movie, summaryLength }: MovieItemProps) => {
  const { favorites, addFavorite, removeFavorite } = useFavoritesStore();
  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  let formattedMovieSummary = removeHtmlTags(movie.summary);

  if (summaryLength && formattedMovieSummary.length > summaryLength) {
    formattedMovieSummary = `${formattedMovieSummary.substring(
      0,
      summaryLength,
    )}...`;
  }

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isFavorite) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <Link
      to={`/movies/${movie.id}`}
      className="transition-all duration-200 hover:shadow-sm hover:shadow-gray-500/50"
    >
      <div className="flex flex-col sm:flex-row">
        <img
          src={movie.image.medium}
          alt={movie.name}
          className="h-full w-full object-cover"
        />
        <div className="flex flex-col justify-between pt-3 pl-2">
          <div className="mb-2 sm:mb-0">
            <h2 className="mb-5 text-2xl font-semibold text-black/80 dark:text-neutral-200">
              {movie.name}
            </h2>
            <p className="leading-normal font-normal tracking-tighter text-neutral-700/75 dark:text-neutral-300">
              {formattedMovieSummary}
            </p>
          </div>

          <div className="flex items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-[10px] tracking-tighter text-neutral-600/40 dark:text-neutral-400/80">
                Rating
              </span>
              <span className="text-[11px] tracking-tighter text-neutral-600/40 dark:text-neutral-400/80">
                {movie.rating.average || "N/A"} / 10
              </span>
            </div>

            <span className="text-[11px] font-medium tracking-tighter text-neutral-500/75 dark:text-neutral-400/30">
              {movie.genres.join(", ")}
            </span>
          </div>
        </div>

        <button
          onClick={handleFavoriteClick}
          className={`h-fit self-end rounded-full p-2 transition-colors hover:cursor-pointer sm:self-auto ${
            isFavorite ? "text-green-500" : "text-gray-600"
          }`}
        >
          <FaRegHeart className="text-2xl" />
        </button>
      </div>
    </Link>
  );
};

export default MovieItem;

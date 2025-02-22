import { Movie } from "../types/movie";
import { Link } from "react-router-dom";
import { removeHtmlTags } from "./utils/removeHtmlTags";
import { useFavoritesStore } from "../stores/favoritesStore";

interface MovieItemProps {
  movie: Movie;
  summaryLength?: number;
}

const MovieItem = ({ movie, summaryLength }: MovieItemProps) => {
  const { favorites, addFavorite, removeFavorite } = useFavoritesStore();
  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  let formattedMovieSummary = removeHtmlTags(movie.summary);

  if (summaryLength && formattedMovieSummary.length > summaryLength) {
    formattedMovieSummary = `${formattedMovieSummary.substring(
      0,
      summaryLength
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
    <Link to={`/movies/${movie.id}`} className="block">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={movie.image.medium}
          alt={movie.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{movie.name}</h2>
          <p className="text-gray-600 mb-2">{formattedMovieSummary}</p>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-yellow-500">
              ⭐ {movie.rating.average || "N/A"}
            </span>
            <span className="text-gray-500">{movie.genres.join(", ")}</span>
          </div>

          <button
            onClick={handleFavoriteClick}
            className={`w-full py-2 rounded-lg ${
              isFavorite
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default MovieItem;

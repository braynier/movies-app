import { MovieItemDetailedProps } from "../types/movie";
import { removeHtmlTags } from "./utils/removeHtmlTags";
import { useFavoritesStore } from "../stores/favoritesStore";

const MovieItemDetailed = ({ movie }: MovieItemDetailedProps) => {
  const { favorites, addFavorite, removeFavorite } = useFavoritesStore();
  const isFavorite = favorites.some((fav) => fav.id === movie.id);

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
    <div className="md: grid grid-cols-1 gap-y-5 sm:grid-cols-2 sm:gap-x-3">
      <img
        src={movie.image.original}
        alt={movie.name}
        className="h-[750px] w-full object-cover md:row-span-2"
      />

      <div>
        <h1 className="mt-2 text-3xl font-semibold text-black/80 sm:mt-0 dark:text-neutral-200">
          {movie.name}
        </h1>
        <button
          onClick={handleFavoriteClick}
          className={`mb-3 tracking-tighter uppercase underline hover:cursor-pointer ${isFavorite ? "text-green-400/80" : "text-neutral-500/75 dark:text-neutral-400/80"}`}
        >
          {isFavorite ? "favorite" : "add to favorites"}
        </button>
        <p className="text-neutral-700 dark:text-neutral-300">
          {removeHtmlTags(movie.summary)}
        </p>
      </div>

      <div className="md:place-content-end md:pb-2">
        <p className="text-neutral-700 dark:text-neutral-300">
          Premiered: {movie.premiered}
        </p>
        <p className="text-neutral-700 dark:text-neutral-300">
          Ended: {movie.ended || "Ongoing"}
        </p>
        <p className="text-neutral-700 dark:text-neutral-300">
          Average runtime: {movie.runtime} minutes
        </p>
        <p className="text-neutral-700 dark:text-neutral-300">
          Language: {movie.language}
        </p>
        <p className="text-neutral-700 dark:text-neutral-300">
          Rating: {movie.rating.average || "N/A"}
        </p>
        {movie.officialSite && (
          <p className="text-neutral-700 dark:text-neutral-300">
            Official Site:{" "}
            <a
              href={movie.officialSite}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400/80 underline"
            >
              Go to official site
            </a>
          </p>
        )}
        <p className="text-neutral-700 dark:text-neutral-300">
          Genres: {movie.genres.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default MovieItemDetailed;

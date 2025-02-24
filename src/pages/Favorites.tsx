import BackButton from "../components/BackButton";
import MovieList from "../components/MoviesList";
import { useFavoritesStore } from "../stores/favoritesStore";

function Favorites() {
  const { favorites } = useFavoritesStore();

  return (
    <section className="p-4">
      {favorites.length === 0 && (
        <div className="flex flex-col items-center">
          <p className="mb-2 text-center text-neutral-700/75 dark:text-neutral-300">
            Hey, it seems you haven't added any movies to your list yet!
          </p>
          <BackButton />
        </div>
      )}
      <MovieList movies={favorites} />
    </section>
  );
}

export default Favorites;

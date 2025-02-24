import MovieList from "../components/MoviesList";
import { useFavoritesStore } from "../stores/favoritesStore";

function Favorites() {
  const { favorites } = useFavoritesStore();

  return (
    <section className="p-4">
      {favorites.length === 0 && "No favorites"}
      <MovieList movies={favorites} />
    </section>
  );
}

export default Favorites;

import MovieList from "../components/MoviesList";
import { useFavoritesStore } from "../stores/favoritesStore";

function Favorites() {
  const { favorites } = useFavoritesStore();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Favorites</h1>
      <MovieList movies={favorites} />
    </div>
  );
}

export default Favorites;

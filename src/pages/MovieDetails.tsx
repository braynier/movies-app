import { useParams } from "react-router-dom";
import { useMovieStore } from "../stores/movieStore";
import MovieItemDetailed from "../components/MovieItemDetails";

function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const { movies } = useMovieStore();

  const movie = movies.find((m) => m.id === parseInt(id || ""));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <section>
      <MovieItemDetailed movie={movie} />
    </section>
  );
}

export default MovieDetails;

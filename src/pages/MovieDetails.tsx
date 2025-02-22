import { useParams } from "react-router-dom";
import { useMovieStore } from "../stores/movieStore";
import MovieItem from "../components/MovieItem";

function MovieDetails() {
  const { id } = useParams<{ id: string }>();
  const { movies } = useMovieStore();

  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <MovieItem movie={movie} />

      <div className="mt-6 space-y-2">
        <p>
          <strong>Premiered:</strong> {movie.premiered}
        </p>
        <p>
          <strong>Ended:</strong> {movie.ended || "Ongoing"}
        </p>
        <p>
          <strong>Average Runtime:</strong> {movie.runtime} minutes
        </p>
        <p>
          <strong>Language:</strong> {movie.language}
        </p>
        <p>
          <strong>Official Site:</strong>{" "}
          <a
            href={movie.officialSite}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {movie.officialSite}
          </a>
        </p>
      </div>
    </div>
  );
}

export default MovieDetails;

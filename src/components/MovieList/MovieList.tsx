import { Movie } from "../../interfaces/Movie";
import "./MovieList.css";
import MovieCard from "../MovieCard/MovieCard";

interface Props {
  movies: Movie[];
}


const MovieList = ({ movies }: Props) => { 
  return (
    <main className="movie-list">
      {movies.length > 0 && (
        <ul className="movies">
          {movies.map((movie) => (
            <li className="movie" key={movie.id}>
              <MovieCard movie={movie} />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default MovieList;

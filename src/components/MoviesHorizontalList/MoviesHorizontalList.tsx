import { Movie } from "../../interfaces/Movie";
import "./MoviesHorizontalList.css";
import MovieVerticalCard from "../MovieVerticalCard/MovieVerticalCard";

interface Props {
  movies: Movie[];
}


const MoviesHorizontalList = ({ movies }: Props) => { 
  return (
    <main className="movies-horizontal-list">
      {movies.length > 0 && (
        <ul className="movies">
          {movies.map((movie) => (
            <li className="movie" key={movie.id}>
              <MovieVerticalCard movie={movie} />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default MoviesHorizontalList;

import { Movie } from "../../interfaces/Movie";
import "./MoviesVerticalList.css";
import MovieHorizontalCard from "../MovieHorizontalCard/MovieHorizontalCard";

interface Props {
  movies: Movie[];
}
 
const MoviesVerticalList = ({ movies }: Props) => {  
  return (
    <main className="movies-vertical-list">
      {movies.length > 0 && (
        <ul className="movies">
          {movies.map((movie) => (
            <li className="movie" key={movie.id}>
              <MovieHorizontalCard movie={movie} />
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default MoviesVerticalList;

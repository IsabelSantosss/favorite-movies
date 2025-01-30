import { FcAbout, FcCalendar, FcLike, FcRating } from "react-icons/fc";
import { Movie } from "../../interfaces/Movie";
import "./MovieList.css";

interface Props {
  movies: Movie[];
}

const imageURL = import.meta.env.VITE_IMG;

const MovieList = ({ movies }: Props) => {
  return (
    <main className="movie-list">
      {movies.length > 0 && (
        <ul className="movies">
          {movies.map((movie) => (
            <li className="movie">
              <img src={`${imageURL}${movie.backdropPath}`} alt={movie.title} />
              <h3> {movie.title} </h3>
              <div className="infos">
                <div className="overview">
                  <span>
                    <FcAbout />
                    Sinopse{" "}
                  </span>
                  <p> {movie.overview}</p>
                </div>

                <div className="popularity">
                  <FcRating />
                  <span> Popularidade: </span>
                  <p> {movie.popularity}</p>
                </div>

                <div className="releaseDate">
                  <FcCalendar />
                  <span> Data de lançamento: </span>
                  <p> {movie.releaseDate}</p>
                </div>

                <div className="voteAverage">
                  <FcLike />
                  <span> Voto do público: </span>
                  <p> {movie.voteAverage}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default MovieList;

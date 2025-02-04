import './MovieCard.css';
import { Movie } from "../../interfaces/Movie";
import { toLocale } from "../../utils/toLocale";
import { toPercentage } from "../../utils/toPercentage";
import { FcAbout, FcCalendar, FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";

type Props = {
  movie: Movie;
};

const imageURL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie }: Props) => {
  return (
    <div className="movie-card">
      <img src={`${imageURL}${movie.backdropPath}`} alt={movie.title} />
      <h3> {movie.title} </h3>
      <p> {movie.originalTitle}</p>

      <div className="infos">
        <div className="overview">
          <span>
            <FcAbout />
            Sinopse{" "}
          </span>
          <p> {movie.overview}</p>
        </div> 

        <div className="releaseDate">
          <FcCalendar />
          <span> Data de lançamento: </span>
          <p> {toLocale(movie.releaseDate)}</p>
        </div>

        <div className="voteAverage">
          <FcLike />
          <span> Nota: </span>
          <p> {toPercentage(movie.voteAverage)}%</p>
        </div>
      </div>

      <div className="footer">
        <button>
          <Link to={`movie/${movie.id}`}>Ver mais</Link>
        </button>
      </div>
    </div>
  );
};

export default MovieCard;

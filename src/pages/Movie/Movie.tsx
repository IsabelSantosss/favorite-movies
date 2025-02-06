import { useParams } from "react-router-dom";
import "./Movie.css";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store";
import { useEffect } from "react";
import {
  addRatingToMovie,
  getMovieById,
  getMovieReviews,
  getMovieImages,
} from "../../store/slices/moviesSlice";
import { FcBullish, FcReadingEbook } from "react-icons/fc";
import { toLocale } from "../../utils/toLocale";
import { FaRegStar, FaStar } from "react-icons/fa";

const imageURL = import.meta.env.VITE_IMG;

const Movie = () => {
  const { id } = useParams();
  const movieDetail = useSelector(
    (state: RootState) => state.movies.movieDetail
  );
  const movieReviews = useSelector(
    (state: RootState) => state.movies.movieReviews
  );
  const movieImages = useSelector(
    (state: RootState) => state.movies.movieImages.backdrops
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMovieById(id as string));
    dispatch(getMovieReviews(id as string));
    dispatch(getMovieImages(id as string));
  }, [id]);

  const rateMovie = (ratingValue: number) => {
    const value = { movieId: id, ratingValue: { value: ratingValue } };
    dispatch(addRatingToMovie(value as any));
  };

  console.log(movieDetail);

  return (
    <div className="movie-details">
      {movieDetail && (
        <>
          <div className="header">
            <div className="content">
              <div className="first-row">
                <div className="title">
                  <h2> {movieDetail?.title} </h2>
                  <p> Título original: {movieDetail?.originalTitle} </p>
                  <p> {toLocale(movieDetail?.releaseDate)} </p>
                </div>

                <div className="extra-infos">
                  <div className="average">
                    <span>Avaliação</span>
                    <p>
                      <FaStar className="star" />
                      {movieDetail.voteAverage}
                    </p>
                  </div>

                  <div className="rate">
                    <span>Sua avaliação</span>
                    <p>
                      <FaRegStar
                        onClick={() => rateMovie(9)}
                        className="star"
                      />
                      Avaliar
                    </p>
                  </div>

                  <div className="popularity">
                    <span>Popularidade</span>
                    <p>
                      <FcBullish />
                      {movieDetail.popularity}
                    </p>
                  </div>
                </div>
              </div>

              <div className="second-row">
                <div className="images">
                  {movieImages?.length > 0 &&
                    movieImages
                      .slice(0, 4)
                      .map((backdrop) => (
                        <img
                          src={`${imageURL}${backdrop?.filePath}`}
                          key={backdrop.filePath}
                        />
                      ))}
                </div>

                <div className="genres">
                  {movieDetail.genres &&
                    movieDetail.genres.map((genre) => (
                      <div className="genre-tag" key={genre.id}>
                        <span>{genre.name}</span>
                      </div>
                    ))}
                  {/* <div className="overview">
                      <p> {movieDetail?.overview}</p>
                    </div> */}
                  {/* 
                  <div className="imdb">
                    <button>
                      <a
                        target="_blank"
                        href={`https://www.imdb.com/pt/title/${movieDetail.imdbId}/`}
                      >
                        Visitar no IMDB{" "}
                      </a>
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          <div className="first-column">
            <div className="content">
              {/* <div className="movie">
                <div className="first-row">
                  <div className="title">
                    <h2> {movieDetail?.title} </h2>
                    <p> Título original: {movieDetail?.originalTitle} </p>
                  </div>

                  <div className="extra-infos">
                    <div className="average">
                      <span>Avaliação</span>
                      <p>
                        <FaStar className="star" />
                        {movieDetail.voteAverage}
                      </p>
                    </div>

                    <div className="rate">
                      <span>Sua avaliação</span>
                      <p>
                        <FaRegStar
                          onClick={() => rateMovie(9)}
                          className="star"
                        />
                        Avaliar
                      </p>
                    </div>

                    <div className="popularity">
                      <span>Popularidade</span>
                      <p>
                        <FcBullish />
                        {movieDetail.popularity}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="second-row">
                  <img
                    src={`${imageURL}${movieDetail?.posterPath}`}
                    alt={movieDetail?.originalTitle}
                  />

                  <div className="infos">
                    <div className="overview">
                      <p> {movieDetail?.overview}</p>
                    </div>

                    <div className="imdb">
                      <button>
                        <a
                          target="_blank"
                          href={`https://www.imdb.com/pt/title/${movieDetail.imdbId}/`}
                        >
                          Visitar no IMDB{" "}
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div> */}

              <div className="reviews">
                <h3>Reviews</h3>
                {movieReviews?.length > 0 &&
                  movieReviews?.map((review) => (
                    <div className="review" key={review.author}>
                      <div className="first-row">
                        <div className="avatar">
                          <FcReadingEbook />
                        </div>
                        <div className="infos">
                          <h3 className="title">@{review?.author}</h3>
                          <span className="subtitle">{review?.createdAt}</span>
                        </div>
                      </div>

                      <div className="second-row">
                        <span>{review?.content}</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <div className="second-column">
            <div className="content"></div>
          </div>
        </>
      )}
    </div>
  );
};

export default Movie;

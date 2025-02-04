import { useParams } from "react-router-dom";
import "./Movie.css";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store";
import { useEffect } from "react";
import {
  getMovieById,
  getMovieReviews,
} from "../../redux-store/slices/moviesSlice";
import { FcReadingEbook } from "react-icons/fc";
import { toLocale } from "../../utils/toLocale";

const imageURL = import.meta.env.VITE_IMG;

const Movie = () => {
  const { id } = useParams();
  const movieDetail = useSelector(
    (state: RootState) => state.movies.movieDetail
  );
  const movieReviews = useSelector(
    (state: RootState) => state.movies.movieReviews
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMovieById(id as string));
    dispatch(getMovieReviews(id as string));
  }, [id]);

  console.log(movieDetail);

  return (
    <div className="movie-details">
      {movieDetail && (
        <>
          <div className="first-column">
            <div className="content">
              <img
                src={`${imageURL}${movieDetail?.posterPath}`}
                alt={movieDetail?.originalTitle}
              />
              <div className="title">
                <h2> {movieDetail?.originalTitle} </h2>
                <p> {movieDetail?.tagline} </p>
              </div>

              <div className="infos">
                <div className="overview">
                  <h3>Sinopse</h3>
                  <p> {movieDetail?.overview}</p>
                </div>

                <div className="status">
                  <h3>Data de lançamento</h3>
                  <p> {toLocale(movieDetail?.releaseDate)} </p>
                </div>
              </div>
            </div>
          </div>
          <div className="second-column">
            <div className="content">
              <h3>Reviews</h3>
              {movieReviews?.length > 0 &&
                movieReviews?.map((review) => (
                  <div className="review" key={review.author}>
                    <div className="first-row">
                      <div className="avatar">
                        {review.authorDetails.avatarPath ? (
                          <img
                            src={`${imageURL}${review?.authorDetails.avatarPath}`}
                            alt={review?.authorDetails.name}
                          />
                        ) : (
                          <FcReadingEbook />
                        )}
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
        </>
      )}
    </div>
  );
};

export default Movie;

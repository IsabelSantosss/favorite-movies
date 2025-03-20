import { useEffect } from "react";
import "./Home.css";
import MoviesVerticalList from "../../components/MoviesVerticalList/MoviesVerticalList";
import {
  getUpcomingMovies,
  getTopRatedMoviesByLanguage,
} from "../../store/slices/moviesSlice";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store";
import MoviesHorizontalList from "../../components/MoviesHorizontalList/MoviesHorizontalList";
import LoadingContent from "../../components/LoadingContent/LoadingContent";

const Home = () => {
  const moviesState = useSelector((state: RootState) => state.movies);
  const movies = moviesState.movies;
  const upcomingMovies = moviesState.upcomingMovies.slice(0, 10);
  const isLoading = moviesState.isLoading;

  const dispatch = useAppDispatch();

  const language: string = "pt-BR";

  useEffect(() => {
    dispatch(getTopRatedMoviesByLanguage(language));
    dispatch(getUpcomingMovies());
  }, [dispatch]);

  return (
    <div className="container">
      {isLoading ? (
        <div className="loading">
          <LoadingContent />
        </div>
      ) : (
        <div className="content">
          <div className="top-rated">
            {movies.length > 0 && <MoviesHorizontalList movies={movies} />}
          </div>
          <div className="upcoming">
            <h2 className="title">A seguir</h2>

            <div className="movies-upcoming">
              {movies.length > 0 && (
                <MoviesVerticalList movies={upcomingMovies} />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

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

const Home = () => {
  const movies = useSelector((state: RootState) => state.movies.movies);
  const upcomingMovies = useSelector((state: RootState) =>
    state.movies.upcomingMovies.slice(0, 10)
  );
  const dispatch = useAppDispatch();

  const language: string = "pt-BR";

  useEffect(() => {
    dispatch(getTopRatedMoviesByLanguage(language));
    dispatch(getUpcomingMovies());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="top-rated">
        {movies.length > 0 && <MoviesHorizontalList movies={movies} />}
      </div>
      <div className="upcoming">
        <h2 className="title">A seguir</h2>

        <div className="movies-upcoming">
          {movies.length > 0 && <MoviesVerticalList movies={upcomingMovies} />}
        </div>
      </div>
    </div>
  );
};

export default Home;

import { useEffect } from "react";
import "./Home.css"; 
import MovieList from "../../components/MovieList/MovieList";
import { getTopRatedMoviesByLanguage } from "../../redux-store/slices/moviesSlice";
import { useSelector } from "react-redux"; 
import { RootState, useAppDispatch } from "../../store";  

const Home = () => { 
  const movies = useSelector((state: RootState) => state.movies.movies);
  const dispatch = useAppDispatch();

  const language: string = "pt-BR";
 
  useEffect(() => {
    dispatch(getTopRatedMoviesByLanguage(language)); 
  }, [dispatch]);

  return (

    <div className="container"> 
      {movies.length > 0 && (
        <>
          <h2 className="title">Filmes mais bem avaliados:</h2>
          <MovieList movies={movies} />{" "} 
        </>
      )}
    </div>
  );
};

export default Home;

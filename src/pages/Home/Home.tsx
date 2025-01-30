import { useEffect, useState } from "react";
import "./Home.css";
import { GetResponse } from "../../interfaces/GetResponse";
import { Movie } from "../../interfaces/Movie";
import { convertResponse } from "../../@types/SnakeCaseKey";
import MovieList from "../../components/MovieList/MovieList";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState<Movie[]>([]);

  const getTopRatedMovies = async (url: string) => {
    const res = await fetch(url);

    await res.json().then((response) => {
      setTopMovies(convertResponse(response as GetResponse<Movie>));
    });
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;

    console.log(topRatedUrl);

    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <div className="container">
      <h2 className="title">Filmes mais bem avaliados:</h2>

      <MovieList movies={topMovies}/> 
    </div>
  );
};

export default Home;

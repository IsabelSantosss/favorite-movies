import { convertGetAllResponse, convertResponse } from "../utils/handlers/responseHandler";
import { GetAllResponseType } from "../utils/interface/GetAllResponseType";
import { Movie } from "../interfaces/Movie";
import { requestConfig } from "../utils/handlers/config";
import { MovieDetails } from "@/interfaces/MovieDetail";
import { MovieReviews } from "@/interfaces/MovieReviews";

export const apiUrl = import.meta.env.VITE_API;

export const getTopRatedMoviesByLanguage = async (language: string): Promise<Movie[] | any> => {
      const config = requestConfig("GET", null);

      try {
            const url = language ? `${apiUrl}/movie/top_rated?language=${language}` :
                  `${apiUrl}/movie/top_rated`;

            const res = await fetch(url, config)
                  .then((res) => res.json())
                  .catch((err) => err);

            return convertGetAllResponse(res as GetAllResponseType<Movie>);
      } catch (error) {
            return error;
      }
};

export const getMovieById = async (movieId: string): Promise<MovieDetails | any> => {
      const config = requestConfig('GET', null);

      try {
            const url = `${apiUrl}/movie/${movieId}`;

            const res = await fetch(url, config)
                  .then((res) => res.json())
                  .catch((err) => err);

            console.log('resposta ', convertResponse(res as MovieDetails))
            return convertResponse(res as MovieDetails);
      } catch (error) {
            return error;
      }

}

export const getMovieReviews = async (movieId: string): Promise<MovieReviews[] | any> => {
      const config = requestConfig('GET', null);

      try {
            const url = `${apiUrl}/movie/${movieId}/reviews`;

            const res = await fetch(url, config)
                  .then((res) => res.json())
                  .catch((err) => err);

            return convertGetAllResponse(res as GetAllResponseType<MovieReviews>);
      } catch (error) {
            return error;
      }

}

export const moviesService = {
      getTopRatedMoviesByLanguage,
      getMovieById,
      getMovieReviews
};

export default moviesService;
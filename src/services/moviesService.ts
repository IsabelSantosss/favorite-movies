import { convertGetAllResponse, convertResponse } from "../utils/handlers/responseHandler";
import { GetAllResponseType } from "../utils/interface/GetAllResponseType";
import { Movie } from "../interfaces/Movie";
import { requestConfig } from "../utils/handlers/config";
import { MovieDetails } from "@/interfaces/MovieDetail";
import { MovieReviews } from "@/interfaces/MovieReviews";
import { MovieImage } from "@/interfaces/MovieImages";

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
            const url = `${apiUrl}/movie/${movieId}?language=pt-BR`;

            const res = await fetch(url, config)
                  .then((res) => res.json())
                  .catch((err) => err);
 
            return convertResponse(res as MovieDetails);
      } catch (error) {
            return error;
      }

}

export const getMovieReviews = async (movieId: string): Promise<MovieReviews[] | any> => {
      const config = requestConfig('GET', null);

      try {
            const url = `${apiUrl}/movie/${movieId}/reviews?language=pt-BR`;

            const res = await fetch(url, config)
                  .then((res) => res.json())
                  .catch((err) => err);

            return convertGetAllResponse(res as GetAllResponseType<MovieReviews>);
      } catch (error) {
            return error;
      } 
}

export const addRatingToMovie = async (value: { movieId: string, ratingValue: { [key: string]: number } }): Promise<void> => { 
      const config = requestConfig('POST', value.ratingValue);

      try {
            const url = `${apiUrl}/movie/${value.movieId}/rating`; 

            const res = await fetch(url, config)
                  .then((res) => res.json())
                  .catch((err) => err); 
      } catch (error) {
            console.log(error);
      }

}
 
export const getMovieImages = async (movieId: string): Promise<MovieImage | any> => {
      const config = requestConfig('GET', null);

      try {
            const url = `${apiUrl}/movie/${movieId}/images`;
            
            const res = await fetch(url, config)
                  .then((res) => res.json())
                  .catch((err) => err);

            return convertResponse(res as MovieImage);
      } catch (error) {
            return error;
      } 
}

export const moviesService = {
      getTopRatedMoviesByLanguage,
      getMovieById,
      getMovieReviews,
      addRatingToMovie,
      getMovieImages
};

export default moviesService;
import { convertResponse } from "../utils/handlers/responseHandler";
import { GetResponse } from "../interfaces/GetResponse";
import { Movie } from "../interfaces/Movie";
import { requestConfig } from "../utils/handlers/config";

export const apiUrl = import.meta.env.VITE_API;

export const getTopRatedMoviesByLanguage = async (language: string): Promise<Movie[] | any>  => {
      const config = requestConfig("GET", null);

      try {
            const url = language ? `${apiUrl}/movie/top_rated?language=${language}` :
                  `${apiUrl}/movie/top_rated`;

            const res = await fetch(url, config)
                  .then((res) => res.json())
                  .catch((err) => err);

            return convertResponse(res as GetResponse<Movie>);
      } catch (error) {
            return error;
      }
};

export const moviesService = {
      getTopRatedMoviesByLanguage
};

export default moviesService;
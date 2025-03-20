import MoviesHorizontalList from "../../components/MoviesHorizontalList/MoviesHorizontalList";
import { useEffect } from "react";
import { useQuery } from "../../hooks/useQuery";
import { RootState, useAppDispatch } from "../../store";
import { getFilteredMovies } from "../../store/slices/moviesSlice";
import { useSelector } from "react-redux";
import LoadingContent from "../../components/LoadingContent/LoadingContent";

const Search = () => {
  const query = useQuery();
  const search = query.get("q") as string;

  const dispatch = useAppDispatch();

  const moviesState = useSelector((state: RootState) => state.movies);
  const movies = moviesState.movies;
  const isLoading = moviesState.isLoading;

  useEffect(() => {
    dispatch(getFilteredMovies(search));
  }, [dispatch, search]);

  return (
    <div className="search">
      {isLoading ? (
        <div className="loading">
          <LoadingContent />
        </div>
      ) : (
        <MoviesHorizontalList movies={movies}></MoviesHorizontalList>
      )}
    </div>
  );
};

export default Search;

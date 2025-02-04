import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Movie } from "../../interfaces/Movie";
import moviesService from "../../services/moviesService";
import { MovieDetails } from "@/interfaces/MovieDetail";
import { MovieReviews } from "@/interfaces/MovieReviews";

export interface MoviesSliceState {
	isLoading: boolean;
	errorMessage: string;
	movies: Movie[];
	movieDetail?: MovieDetails;
	movieReviews: MovieReviews[];
};

const initialState: MoviesSliceState = {
	isLoading: false,
	errorMessage: '',
	movies: [],
	movieReviews: []
}

// Get top rated movies by language
export const getTopRatedMoviesByLanguage = createAsyncThunk(
	"movies/getTopRatedMoviesByLanguage",
	async (language: string, thunkAPI) => {
		const data = await moviesService.getTopRatedMoviesByLanguage(language);

		// check for errors
		if (data.errors) {
			return thunkAPI.rejectWithValue('teste');
		}

		return data;
	}
);

// Get movie by id
export const getMovieById = createAsyncThunk(
	"movies/getMovieById",
	async (movieId: string, thunkAPI) => {
		const data = await moviesService.getMovieById(movieId);

		// check for errors
		if (data.errors) {
			return thunkAPI.rejectWithValue('teste');
		}

		return data;
	}
);

// Get movie by id
export const getMovieReviews = createAsyncThunk(
	"movies/getMovieReviews",
	async (movieId: string, thunkAPI) => {
		const data = await moviesService.getMovieReviews(movieId);

		// check for errors
		if (data.errors) {
			return thunkAPI.rejectWithValue('teste');
		}

		return data;
	}
);


export const moviesSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {},
	extraReducers: (builder) =>{
		builder
		.addCase(getTopRatedMoviesByLanguage.pending, (state) => {
			state.isLoading = true
		})
		.addCase(getTopRatedMoviesByLanguage.fulfilled, (state, action) => {
			state.movies = action.payload,
			state.isLoading = false
		})
		.addCase(getTopRatedMoviesByLanguage.rejected, (state) => {
			state.isLoading = false,
			state.errorMessage = 'deu erro'
		})
		.addCase(getMovieById.pending, (state) => {
			state.isLoading = true
		})
		.addCase(getMovieById.fulfilled, (state, action) => {
			state.movieDetail = action.payload,
			state.isLoading = false
		})
		.addCase(getMovieById.rejected, (state) => {
			state.isLoading = false,
			state.errorMessage = 'deu erro'
		})
		.addCase(getMovieReviews.pending, (state) => {
			state.isLoading = true
		})
		.addCase(getMovieReviews.fulfilled, (state, action) => {
			state.movieReviews = action.payload,
			state.isLoading = false
		})
		.addCase(getMovieReviews.rejected, (state) => {
			state.isLoading = false,
			state.errorMessage = 'deu erro'
		})
	}
});



// export const {
// 	getTopRatedMoviesByLanguageAction,
// 	getTopRatedMoviesByLanguageSuccessAction,
// 	getTopRatedMoviesByLanguageFailedAction
// } = moviesSlice.actions;
 
export default moviesSlice.reducer;
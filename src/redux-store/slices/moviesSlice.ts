import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Movie } from "../../interfaces/Movie";
import moviesService from "../../services/moviesService";

export interface MoviesSliceState {
	isLoading: boolean;
	errorMessage: string;
	movies: Movie[];
};

const initialState: MoviesSliceState = {
	isLoading: false,
	errorMessage: '',
	movies: []
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


export const moviesSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		// getTopRatedMoviesByLanguageAction: (state) => {
		// 	state.isLoading = true
		// },
		// getTopRatedMoviesByLanguageSuccessAction: (state, action: PayloadAction<[]>) => {
		// 	state.movies = action.payload,
		// 		state.isLoading = false
		// },
		// getTopRatedMoviesByLanguageFailedAction: (state) => {
		// 	state.errorMessage = 'Deu erro'
		// 	state.isLoading = false
		// }
	},
	extraReducers: (builder) =>{
		builder.addCase(getTopRatedMoviesByLanguage.pending, (state) => {
			state.isLoading = true
		})
		.addCase(getTopRatedMoviesByLanguage.fulfilled, (state, action) => {
			state.movies = action.payload,
			state.isLoading = false
		})
		.addCase(getTopRatedMoviesByLanguage.rejected, (state, action) => {
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
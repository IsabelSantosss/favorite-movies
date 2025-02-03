import { configureStore, Reducer } from '@reduxjs/toolkit'
import moviesReducer, { MoviesSliceState } from './redux-store/slices/moviesSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    movies: moviesReducer as Reducer<MoviesSliceState>
  } 
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>() 

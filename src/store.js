import { configureStore } from '@reduxjs/toolkit';
import movieListReducer from './movieListSlice';

// Create the Redux store and register the movieListReducer
export const store = configureStore({
  reducer: {
    movieList: movieListReducer,
  },
});
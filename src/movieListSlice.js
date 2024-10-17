import { createSlice } from '@reduxjs/toolkit';

// Initial state for the movieList
const initialState = {
  movies: [],
};

// Create a slice for the movieList with an action to update the list
const movieListSlice = createSlice({
  name: 'movieList',
  initialState,
  reducers: {
    setMovieList: (state, action) => {
      state.movies = action.payload; // Update movieList with new array
    },
  },
});

// Export the action and reducer
export const { setMovieList } = movieListSlice.actions;
export default movieListSlice.reducer;
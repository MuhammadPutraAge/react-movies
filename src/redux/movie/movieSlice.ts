import { createSlice } from "@reduxjs/toolkit";
import { getMovieByID, getMovies } from "./movieActions";
import { MovieState } from "./movieTypes";

const initialState: MovieState = {
  loading: false,
  search: "",
  list: [],
  data: null,
  error: false,
  message: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload.list;
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
      })
      .addCase(getMovieByID.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMovieByID.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getMovieByID.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
      });
  },
});

export default movieSlice.reducer;

import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "..";
import { API } from "../../config";
import {
  GetMovieByIDProps,
  GetMoviesProps,
  MovieItem,
  MovieListItem,
} from "./movieTypes";

// 1. Get movie list by search
export const getMovies = createAsyncThunk<
  { list: MovieListItem[]; page: number },
  GetMoviesProps,
  { rejectValue: string; state: RootState }
>("movie/list", async ({ s, page }, { rejectWithValue, getState }) => {
  try {
    const query = s === "" ? "avengers" : s;
    const prevMovieList = getState().movie.list;

    const { data } = await API.get(
      `/?apikey=${process.env.REACT_APP_API_KEY}&s=${query}&page=${page}`
    );

    return {
      list: [...prevMovieList, ...(data.Search as MovieListItem[])],
      page,
    };
  } catch (e: any) {
    return rejectWithValue(e.response.data.Error);
  }
});

// 2. Get movie by ID
export const getMovieByID = createAsyncThunk<
  MovieItem,
  GetMovieByIDProps,
  { rejectValue: string }
>("movie/data", async ({ i }, { rejectWithValue }) => {
  try {
    const { data } = await API.get(
      `/?apikey=${process.env.REACT_APP_API_KEY}&i=${i}`
    );

    return data;
  } catch (e: any) {
    return rejectWithValue(e.response.data.Error);
  }
});

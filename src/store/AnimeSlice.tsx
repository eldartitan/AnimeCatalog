/** @format */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { AnimeData, GetAnimeDataType, GetAnimeType } from "../types";

type AnimeState = {
  list: AnimeData[] | null;
  loading: boolean;
  error: string | null | undefined ;
  searchList: AnimeData[] | null | undefined;
  animeData: AnimeData | null;
};

interface MyKnownError {
  message: string
}

export const getAnime = createAsyncThunk<
  AnimeData,
  number | null,
  { rejectValue: MyKnownError }
  >("anime/getAnime", async (id, thunkApi) => {
  try {
    const response = await axios.get<GetAnimeDataType>(
      `https://api.jikan.moe/v4/anime/${id}`,
    )
    return response.data.data as AnimeData;
  } catch (error) {
    return thunkApi.rejectWithValue(error as MyKnownError);
  }

});

export const topAnime = createAsyncThunk<
  AnimeData[],
  number | null,
  { rejectValue: MyKnownError }
>("anime/topAnime", async (page, thunkApi) => {
  try {
    const response = await axios.get<GetAnimeType>(
      "https://api.jikan.moe/v4/top/anime",
      {
        params: { page },
      },
    )
    return response.data.data as AnimeData[];
  } catch (error) {
    return thunkApi.rejectWithValue(error as MyKnownError);
  }
});

export const searchAnime = createAsyncThunk<
  AnimeData[],
  string,
  { rejectValue: MyKnownError }
  >("anime/searchAnime", async (text, thunkApi) => {
  try {
    const response = await axios.get("https://api.jikan.moe/v4/anime", {
      params: {
        letter: text,
      },
    })
    return response.data.data as AnimeData[];
  } catch (error) {
    return thunkApi.rejectWithValue(error as MyKnownError);
  }
});

const initialState: AnimeState = {
  list: null,
  loading: false,
  error: null,
  searchList: null,
  animeData: null,
};

const animeSlice = createSlice({
  name: "anime",
  initialState,
  reducers: {
    cleanSearchList: (state: AnimeState) => {
      state.searchList = null
    }
  },
  extraReducers(builder) {
    builder
      .addCase(topAnime.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.list = null;
      })
      .addCase(topAnime.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(topAnime.rejected, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.error = action.payload.message
        }
      })
      .addCase(searchAnime.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchAnime.rejected, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.error = action.payload.message
        }
      })
      .addCase(searchAnime.fulfilled, (state, action) => {
        state.loading = false;
        state.searchList = action.payload;
      })
      .addCase(getAnime.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAnime.rejected, (state, action) => {
        state.loading = false;
        if (action.payload) {
          state.error = action.payload.message
        }
      })
      .addCase(getAnime.fulfilled, (state, action) => {
        state.loading = false;
        state.animeData = action.payload;
      })
  },
});

export const {cleanSearchList} = animeSlice.actions;
export default animeSlice.reducer;

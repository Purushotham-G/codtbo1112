import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getFourthApi } from "../../Service/SocialTrendingApi";

const initialState = {
  socialApiData: null,
  socialApiLoading: false,
};

export const getTrendingApiData = createAsyncThunk(
  "getTrendingApiData",
  async (thunkApi) => {
    const resp = await getFourthApi();
    console.log("sjddajc",resp)
    return resp;
  }
);

export const trendingSlice = createSlice({
  name: "trend",
  initialState,
  reducers: {},
  extraReducers: {
    [getTrendingApiData.pending]: (state) => {
      state.socialApiLoading = true;
    },
    [getTrendingApiData.fulfilled]: (state, { payload }) => {
      state.socialApiLoading = false;
      state.socialApiData = payload;
    },
    [getTrendingApiData.rejected]: (state) => {
      state.socialApiLoading = false;
    },
  },
});

export const trendingSliceReducer = trendingSlice.reducer;

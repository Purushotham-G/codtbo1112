import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getFirstApi } from "../Service/HomeApi";

const initialState = {
  firstApiData: null,
  firstApiLoading: false,
};

export const getFirstApiData = createAsyncThunk(
  "getFirstApiData",
  async (thunkApi) => {
    const res = await getFirstApi();
    return res;
  }
);

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: {
    [getFirstApiData.pending]: (state) => {
      state.firstApiLoading = true;
    },
    [getFirstApiData.fulfilled]: (state, { payload }) => {
      state.firstApiLoading = false;
      state.firstApiData = payload;
    },
    [getFirstApiData.rejected]: (state) => {
      state.firstApiLoading = false;
    },
  },
});

export const homeSliceReducer = homeSlice.reducer;

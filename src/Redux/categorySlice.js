import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getThirdApi } from "../Service/CategoryApi";

const initialState = {
  thirdApiData: null,
  thirdApiLoading: false,
};

export const getThirdApiData = createAsyncThunk(
  "getThirdApiData",
  async (thunkApi) => {
    const response = await getThirdApi();
    return response;
  }
);

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: {
    [getThirdApiData.pending]: (state) => {
      state.thirdApiLoading = true;
    },
    [getThirdApiData.fulfilled]: (state, { payload }) => {
      state.thirdApiLoading = false;
      state.thirdApiData = payload;
    },
    [getThirdApiData.rejected]: (state) => {
      state.thirdApiLoading = false;
    },
  },
});

export const categorySliceReducer = categorySlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getFourthApi } from "../../Service/SocialTrendingApi";

const initialState = {
  secondApiData: null,
  secondApiLoading: false,
};

export const getWalletApiData = createAsyncThunk(
  "getWalletApiData",
  async (thunkApi) => {
    const resp = await getFourthApi();
    console.log("dbkjdcbjnf", resp);
    return resp;
  }
);

export const cartSlice2 = createSlice({
  name: "social",
  initialState,
  reducers: {},
  extraReducers: {
    [getWalletApiData.pending]: (state) => {
      state.secondApiLoading = true;
    },
    [getWalletApiData.fulfilled]: (state, { payload }) => {
      state.secondApiLoading = false;
      state.secondApiData = payload?.detail;
    },
    [getWalletApiData.rejected]: (state) => {
      state.secondApiLoading = false;
    },
  },
});

export const cartSliceReducer1 = cartSlice2.reducer;

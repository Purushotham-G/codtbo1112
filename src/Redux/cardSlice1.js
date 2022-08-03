import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSecondApi } from "../Service/CardApi";
import { getMyWallet } from "../Service/MyWalletApi";

const initialState = {
  secondApiData: null,
  secondApiLoading: false,
};

export const getWalletApiData = createAsyncThunk(
  "getWalletApiData",
  async (thunkApi) => {
    const resp = await getMyWallet();
    return resp;
  }
);

export const cartSlice1 = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: {
    [getWalletApiData.pending]: (state) => {
      state.secondApiLoading = true;
    },
    [getWalletApiData.fulfilled]: (state, { payload }) => {
      state.secondApiLoading = false;
      state.secondApiData = payload?.details;
    },
    [getWalletApiData.rejected]: (state) => {
      state.secondApiLoading = false;
    },
  },
});

export const cartSliceReducer = cartSlice1.reducer;

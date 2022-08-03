import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMyWallet } from "../../Service/MyWalletApi";

const initialState = {
  data: null,
  loading: false,
};

export const getWalletApiData = createAsyncThunk(
  "getWalletApiData",
  async (thunkApi) => {
    const resp = await getMyWallet();
    return resp;
  }
);

export const mySlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {},
  extraReducers: {
    [getWalletApiData.pending]: (state) => {
      state.loading = true;
    },
    [getWalletApiData.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    },
    [getWalletApiData.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const myWalletReducer = mySlice.reducer;


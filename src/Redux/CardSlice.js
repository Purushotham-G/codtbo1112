import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSecondApi } from "../Service/CardApi";

const initialState = {
  secondApiData: null,
  secondApiLoading: false,
};

export const getSecondApiData = createAsyncThunk(
  "getSecondApiData",
  async (thunkApi) => {
    const res = await getSecondApi();
    return res;
  }
);

export const cardSlice = createSlice({
    name:'cart',
    initialState,
    reducers : {},
    extraReducers: {
        [getSecondApiData.pending]: (state) => {
          state.secondApiLoading = true;
        },
        [getSecondApiData.fulfilled]: (state, { payload }) => {
          state.secondApiLoading = false;
          state.secondApiData = payload;
        },
        [getSecondApiData.rejected]: (state) => {
          state.secondApiLoading = false;
        },
      },
    });
    
    export const cardSliceReducer = cardSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import { cartSliceReducer } from "./cardSlice1";
import { categorySliceReducer } from "./categorySlice";
import { homeSliceReducer } from "./homeSlice";
import { myWalletReducer } from "./MyWallet/walletSlice";

const store = configureStore({
  reducer: {
    home: homeSliceReducer,
    cart: cartSliceReducer,
    category: categorySliceReducer,
    wallet: myWalletReducer,
  },
});
export default store;

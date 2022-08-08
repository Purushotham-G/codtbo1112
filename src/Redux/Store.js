import { configureStore } from "@reduxjs/toolkit";
import { cartSliceReducer } from "./cardSlice1";
import { categorySliceReducer } from "./categorySlice";
import { homeSliceReducer } from "./homeSlice";
import { myWalletReducer } from "./MyWallet/walletSlice";
import { cartSliceReducer1 } from "./socialTrending/socialSlice1";
// import { cartSliceReducer1 } from "./socialTrending/socialSlice1";

const store = configureStore({
  reducer: {
    home: homeSliceReducer,
    cart: cartSliceReducer,
    category: categorySliceReducer,
    wallet: myWalletReducer,
    social: cartSliceReducer1,
  },
});
export default store;

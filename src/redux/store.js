import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/countrSlice";
import productsSlice from "./slices/productsSlice";
import foreverSlice from "./slices/foreverSlice";
import cartSlice from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    forever: foreverSlice,
    cart: cartSlice,
  },
});

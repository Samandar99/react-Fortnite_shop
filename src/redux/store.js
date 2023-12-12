import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/countrSlice";
import productsSlice from "./slices/productsSlice";

export const store = configureStore({
  reducer: {products: productsSlice },
});

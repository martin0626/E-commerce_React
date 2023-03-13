import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./cart";
import productSlice from "./products";

const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    cart: CartSlice.reducer,
  },
});

export default store;

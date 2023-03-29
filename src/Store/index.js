import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./cart";
import productSlice from "./products";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

// Added Persist Storage For Cart : https://stackoverflow.com/questions/63761763/how-to-configure-redux-persist-with-redux-toolkit

const persistedCartReducer = persistReducer(persistConfig, CartSlice.reducer);

const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    cart: persistedCartReducer,
  },
  middleware: [thunk],
});

export default store;

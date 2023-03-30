import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

// Global State With All Loaded Products
const productSlice = createSlice({
  name: "products",
  initialState: { products: [] },
  reducers: {
    ReplaceProducts(state, action) {
      state.products = action.payload;
    },
  },
});

export const ProductActions = productSlice.actions;

export const getAllProducts = () => {
  return async (dispatch) => {
    dispatch(uiActions.setLoading());
    const request = await fetch("http://localhost:8000/products/");
    const response = await request.json();
    dispatch(ProductActions.ReplaceProducts(response));
    dispatch(uiActions.clearUi());
  };
};

export default productSlice;

import { createSlice } from "@reduxjs/toolkit";

// let initialStateProducts = [
//   {
//     id: "01",
//     description: "New Product From Our brand",
//     price: 22,
//     image:
//       "https://th.bing.com/th/id/R.e40205ede691dd2d7effa1a8b6ecda07?rik=9xangv3qN1M6Rw&pid=ImgRaw&r=0",
//     sale: 0,
//     gender: "male",
//     sizes: ["S", "M"],
//   }]

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
    const request = await fetch("http://localhost:8000/products/");
    const response = await request.json();
    dispatch(ProductActions.ReplaceProducts(response));
  };
};

export default productSlice;

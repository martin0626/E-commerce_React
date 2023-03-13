import CartProduct from "../components/Cart/CartProduct";

const { createSlice } = require("@reduxjs/toolkit");

const CartSlice = createSlice({
  name: "cart",
  initialState: { cartItems: [], quantity: 0 },
  reducers: {
    AddItemToCart(state, action) {
      let inCart = state.cartItems.find(
        (product) => product.id === action.payload.id
      );
      if (!inCart) {
        state.cartItems.push(action.payload);
        state.quantity += 1;
      } else {
        inCart.quantity += 1;
      }
    },
    RemoveItemFromCart(state, action) {
      state.cartItems = state.cartItems.filter((p) => p.id !== action.payload);
    },
  },
});

export default CartSlice;

export const cartAction = CartSlice.actions;

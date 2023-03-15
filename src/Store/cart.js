import CartProduct from "../components/Cart/CartProduct";

const { createSlice } = require("@reduxjs/toolkit");

const CartSlice = createSlice({
  name: "cart",
  initialState: { cartItems: [], quantity: 0, total: 0 },
  reducers: {
    AddItemToCart(state, action) {
      let inCart = state.cartItems.find(
        (product) => product.id === action.payload.id
      );
      if (!inCart) {
        state.cartItems.push(action.payload);
      } else {
        inCart.quantity += 1;
      }
      state.quantity += 1;
      state.total += action.payload.price;
    },
    RemoveItemFromCart(state, action) {
      let cartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (cartItem.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (p) => p.id !== action.payload.id
        );
      } else {
        state.cartItems = state.cartItems.map((el) => {
          if (el.id === action.payload.id) {
            el.quantity -= 1;
          }
          return el;
        });
      }
      state.quantity -= 1;
      state.total -= action.payload.price;
    },
  },
});

export default CartSlice;

export const cartAction = CartSlice.actions;

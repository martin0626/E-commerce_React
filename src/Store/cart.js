import CartProduct from "../components/Cart/CartProduct";
const { createSlice } = require("@reduxjs/toolkit");

const CartSlice = createSlice({
  name: "cart",
  initialState: { cartItems: [], quantity: 0, total: 0 },
  reducers: {
    ReplaceCart(state, action) {
      state.cartItems = action.payload.cartItems;
      state.quantity = action.payload.quantity;
      state.total = action.payload.total;
    },

    AddItemToCart(state, action) {
      let inCart = state.cartItems.find(
        (product) =>
          product.id === action.payload.product.id &&
          product.size === action.payload.product.size
      );
      if (!inCart) {
        state.cartItems.push(action.payload.product);
      } else {
        // TODO Update With CurrQuantity
        inCart.quantity += action.payload.currQuantity;
      }
      state.quantity += action.payload.currQuantity;
      state.total += action.payload.product.price * action.payload.currQuantity;
    },

    RemoveItemFromCart(state, action) {
      let cartItem = state.cartItems.find(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size
      );

      if (cartItem.quantity === 1) {
        state.cartItems = state.cartItems.map((p) => {
          if (p.id === action.payload.id && p.size === action.payload.size) {
            return null;
          }
          return p;
        });
        state.cartItems = state.cartItems.filter((p) => p != null);
      } else {
        state.cartItems = state.cartItems.map((el) => {
          if (el.id === action.payload.id && el.size === action.payload.size) {
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

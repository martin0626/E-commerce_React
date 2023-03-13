import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);
  return (
    <div>
      <h1>CArt Cart</h1>
      {cartItems.map((product) => (
        <CartProduct product={product} />
      ))}
    </div>
  );
};

export default Cart;

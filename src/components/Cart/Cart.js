import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";
import classes from "./Cart.module.css";
import { Link } from "react-router-dom";
import Shop from "../Shop/Shop";
import { Fragment } from "react";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);
  return (
    <Fragment>
      <Shop />
      <div className={classes.modal}>
        <div className={classes.content}>
          <Link to="/shop" className={classes.close}>
            <i class="fa fa-window-close-o" aria-hidden="true"></i>
          </Link>
          <h1>CArt Cart</h1>
          {cartItems.map((product) => (
            <CartProduct product={product} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;

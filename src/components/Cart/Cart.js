import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";
import classes from "./Cart.module.css";
import { Link } from "react-router-dom";
import Shop from "../Shop/Shop";
import { Fragment } from "react";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const total = useSelector((state) => state.cart.total);
  console.log(cartItems);
  console.log(cartItems);
  return (
    <Fragment>
      <Shop />
      <div className={classes.modal}>
        <div className={classes.cart}>
          <div className={classes.content}>
            <div className={classes["cart-icon"]}>
              <i class="fa fa-shopping-cart"></i>
            </div>
            <div className={classes.detail}></div>
            <Link to="/shop" className={classes.close}>
              <i class="fa fa-window-close-o" aria-hidden="true"></i>
            </Link>
            <h1 className={classes["prm-header"]}>Shopping Bag</h1>
            <div className={classes["cart-products"]}>
              {cartItems.map((product) => (
                <CartProduct product={product} />
              ))}
            </div>
          </div>
          <div className={classes.total}>Total: {total}$</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;

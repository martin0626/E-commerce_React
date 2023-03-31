import { useSelector } from "react-redux";
import classes from "./CheckoutInfo.module.css";

const CheckoutInfo = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const total = useSelector((state) => state.cart.total);
  return (
    <div className={classes["checkot-info-content"]}>
      <h1 className={classes.title}>Checkout</h1>
      <div className={classes.info}>
        <div className={`${classes.content} ${classes.imp}`}>
          <p className={classes.txt}>Product</p>
          <p className={classes.txt}>Price</p>
        </div>

        {cartItems.map((product) => {
          return (
            <div className={classes.content}>
              <p className={classes.txt}>
                {product.title} X {product.quantity}
              </p>
              <p>{product.price}$</p>
            </div>
          );
        })}
        <div className={`${classes.content} ${classes.imp}`}>
          <p className={classes.txt}>Delivery:</p>
          <p>5$</p>
        </div>
        <div className={`${classes.content} ${classes.imp}`}>
          <p className={classes.txt}>Total:</p>
          <p>{total + 5} $</p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutInfo;

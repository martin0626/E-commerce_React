import { useDispatch } from "react-redux";
import { cartAction } from "../../Store/cart";
import classes from "./CartProduct.module.css";

const CartProduct = (props) => {
  const product = props.product;
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(cartAction.RemoveItemFromCart(product));
  };

  const addHandler = () => {
    dispatch(cartAction.AddItemToCart(product));
  };
  return (
    <div className={classes.product}>
      <div className={classes.image}>
        <img src={product.image} />
      </div>
      <div className={classes.description}>
        <p>{product.description}</p>
      </div>
      <div className={classes.quantity}>
        <i
          onClick={deleteHandler}
          class={`fa fa-minus-square ${classes.action}`}
          aria-hidden="true"
        ></i>
        <p className={classes["qnt-number"]}>{product.quantity}</p>
        <i
          onClick={addHandler}
          class={`fa fa-plus-square ${classes.action}`}
          aria-hidden="true"
        ></i>
      </div>
      <div className={classes.price}>
        <p>{product.price}$</p>
      </div>
    </div>
  );
};

export default CartProduct;

import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartAction } from "../../Store/cart";
import classes from "./SingleProduct.module.css";

const SingleProduct = (props) => {
  const product = props.product;
  const dispatch = useDispatch();

  const AddToCartHandler = () => {
    const getSessionData = () => {
      let data = window.sessionStorage.getItem("cartItems", {});
      return data ? JSON.parse(data) : [];
    };

    dispatch(cartAction.AddItemToCart({ ...product, quantity: 1 }));
    // let sessionData = getSessionData();
    // sessionData.push(product);
    // window.sessionStorage.setItem("cartItems", JSON.stringify(sessionData));
  };

  return (
    <section className={classes.product}>
      <div className={classes["product-element"]}>
        {product.sale > 0 && (
          <div className={classes.sale}>-{product.sale}%</div>
        )}
        <div className={classes.image}>
          <img src={product.image} />
        </div>
        <div className={classes.action}>
          <a>
            <span onClick={AddToCartHandler} className="fa fa-cart-plus"></span>
          </a>
          <Link to={`details/${product.id}`} end>
            <span className="fa fa-eye"></span>
          </Link>
        </div>
      </div>
      <div className={classes.description}>
        <p>{product.title}</p>
        <p className={classes.price}>{product.price}$</p>
      </div>
    </section>
  );
};

export default SingleProduct;

import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartAction } from "../../Store/cart";
import classes from "./SingleProduct.module.css";

const SingleProduct = (props) => {
  const product = props.product;
  const dispatch = useDispatch();

  const AddToCartHandler = () => {
    dispatch(cartAction.AddItemToCart({ ...product, quantity: 1 }));
  };

  return (
    <div className={classes["product-element"]}>
      {product.sale > 0 && <div className={classes.sale}>-{product.sale}%</div>}
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

      <div className={classes.description}>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default SingleProduct;

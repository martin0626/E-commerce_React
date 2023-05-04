import { Link, redirect } from "react-router-dom";
import classes from "./SingleProduct.module.css";

const SingleProduct = (props) => {
  const product = props.product;

  return (
    <section key={product.id} className={classes.product}>
      <Link
        to={`/shop/details/${product.slug}`}
        className={classes["product-element"]}
      >
        {product.sale > 0 && (
          <div className={classes.sale}>-{product.sale}%</div>
        )}
        <div className={classes.image}>
          <img src={product.image} />
        </div>
        <div className={classes.action}>
          <span className="fa fa-eye"></span>
        </div>
      </Link>
      <div className={classes.description}>
        <p>{product.title}</p>
        <p className={classes.price}>
          {product.price * ((100 - product.sale) / 100)}$
        </p>
        {product.sale ? (
          <p className={`${classes.price} ${classes["old-price"]}`}>
            {product.price}$
          </p>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default SingleProduct;

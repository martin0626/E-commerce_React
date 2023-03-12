import classes from "./SingleProduct.module.css";

const SingleProduct = (props) => {
  const product = props.product;

  return (
    <div className={classes["product-element"]}>
      <div className={classes.image}>
        <img src={product.image} />
      </div>
      <div className={classes.action}>
        <span className="fa fa-cart-plus"></span>
        <span className="fa fa-eye"></span>
      </div>

      <div className={classes.description}>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default SingleProduct;

import classes from "./NewCartProduct.module.css";

const NewCartProduct = (props) => {
  const product = props.product;

  // Add Animation on Remove
  return (
    <div className={classes["new-item-not"]}>
      <div className={classes["image-section"]}>
        <img src={product.image} />
      </div>
      <div className={classes["description-section"]}>
        <p className={classes.title}>{product.title}</p>
        <p>Size {product.size}</p>
      </div>
    </div>
  );
};

export default NewCartProduct;

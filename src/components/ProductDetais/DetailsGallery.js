import classes from "./DetailsGallery.module.css";

const DetailGallery = (props) => {
  const product = props.product;
  return (
    <div className={classes["images-content"]}>
      <div className={classes.image}>
        <img src={product.image} />
      </div>
      <div className={classes.gallery}>
        <img src={product.image} />
        <img src={product.image} />
        <img src={product.image} />
        <img src={product.image} />
        <img src={product.image} />
        <img src={product.image} />
      </div>
    </div>
  );
};

export default DetailGallery;

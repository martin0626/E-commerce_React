import classes from "./Details.module.css";

const DetailsElement = (props) => {
  const product = props.product;
  return (
    <section className={classes.details}>
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
      <div className={classes["form-description"]}>
        <h1 className="heading-secondary">{product.description}</h1>
        <p className={classes.price}>{product.price} $</p>
        <p className={classes.text}>
          You can use grid properties on the image and text, as well. Just make
          the parent a grid container. .pricing1box pricing1box-div
        </p>
        <div className={classes.sizes}>
          <p>XS</p>
          <p className={classes.active}>S</p>
          <p>M</p>
          <p>L</p>
          <p className={classes["out-of-stock"]}>XL</p>
          <p>XXL</p>
          <p className={classes["out-of-stock"]}>XXXL</p>
        </div>
      </div>
    </section>
  );
};

export default DetailsElement;

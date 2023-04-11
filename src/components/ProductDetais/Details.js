import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { cartAction } from "../../Store/cart";
import classes from "./Details.module.css";
import PriceElement from "./Price";
import helpers from "../../utils";

const DetailsElement = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [productQuantity, setProductQuantity] = useState(0);
  const [chosenSize, setChosenSize] = useState(null);
  const dispatch = useDispatch();

  const quantityHandler = (step) => {
    let qnt = productQuantity + step;
    if (qnt < 0) {
      qnt = 0;
    }
    setProductQuantity(qnt);
  };

  const addToCartHandler = () => {
    // TODO Add Ui Alert Box
    if (productQuantity !== 0 && chosenSize) {
      dispatch(
        cartAction.AddItemToCart({
          product: {
            id: product.id,
            title: product.title,
            image: product.image,
            size: chosenSize,
            price: helpers.calculateSalePrice(product.price, product.sale),
            quantity: productQuantity,
          },
          currQuantity: productQuantity,
        })
      );
    }
  };

  const choseSizeHandler = (el) => {
    const currChosenSize = el.target.textContent;
    setChosenSize(currChosenSize);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      let request = await fetch(`http://localhost:8000/products/${productId}/`);
      const response = await request.json();
      setProduct(response);
    };

    fetchProduct();
  }, []);

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
        <div className={classes["title-section"]}>
          <h1 className="heading-secondary">{product.title}</h1>
          {product.sale > 0 && (
            <p className={classes["sale-title"]}>-{product.sale}%</p>
          )}
        </div>
        <PriceElement price={product.price} sale={product.sale} />
        <p className={classes.text}>{product.description}</p>
        <div className={classes.sizes}>
          {product.size ? (
            product.size.map((s) => (
              <p
                className={s.size === chosenSize && classes.active}
                onClick={choseSizeHandler}
              >
                {s.size}
              </p>
            ))
          ) : (
            <p>Out Of Stock</p>
          )}
        </div>
        <div className={classes["add-to-cart-section"]}>
          <div className={classes.quantity}>
            <div className={classes["quantity-controler"]}>
              <p onClick={() => quantityHandler(1)} className={classes.plus}>
                <i class="fa fa-plus"></i>
              </p>
              <p onClick={() => quantityHandler(-1)} className={classes.minus}>
                <i class="fa fa-minus"></i>
              </p>
            </div>
            <p className={classes.quantity}>{productQuantity}</p>
          </div>
          <div className={classes.add}>
            <a onClick={addToCartHandler} className={classes["add-btn"]}>
              Add To Cart
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsElement;

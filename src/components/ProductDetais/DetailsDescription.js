import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../Store/cart";
import classes from "./DetailsDescription.module.css";
import helpers from "../../utils";
import PriceElement from "./Price";
import { uiActions } from "../../Store/ui-slice";
import NewCartProduct from "../Ui/NewCartProduct";
import NotificationElement from "../Ui/Notifications";

const DetailsDescription = (props) => {
  const product = props.product;
  const [productQuantity, setProductQuantity] = useState(0);
  const [chosenSize, setChosenSize] = useState(null);
  const newCart = useSelector((state) => state.ui.newItem);
  const message = useSelector((state) => state.ui.message);
  const dispatch = useDispatch();

  const quantityHandler = (step) => {
    let qnt = productQuantity + step;
    if (qnt < 0) {
      qnt = 0;
    }
    setProductQuantity(qnt);
  };

  const addToCartHandler = () => {
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

      dispatch(
        uiActions.setNewcartItem({
          image: product.image,
          title: product.title,
          product: product.size,
        })
      );
    } else {
      dispatch(
        uiActions.setMessage({
          title: "Fill Size & Quantity",
          text: "Please Choose Size And Quantity Greater Than 0",
          status: "reminder",
        })
      );
    }
    const timeout = setTimeout(() => {
      dispatch(uiActions.clearUi());
    }, 4000);

    return () => clearTimeout(timeout);
  };

  const choseSizeHandler = (el) => {
    const currChosenSize = el.target.textContent;
    setChosenSize(currChosenSize);
  };

  return (
    <Fragment>
      {newCart && <NewCartProduct product={{ ...product, size: chosenSize }} />}
      {message && <NotificationElement />}
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
                key={s.id}
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
    </Fragment>
  );
};

export default DetailsDescription;

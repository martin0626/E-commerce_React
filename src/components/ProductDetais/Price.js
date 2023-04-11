import helpers from "../../utils";
import classes from "./Price.module.css";

const PriceElement = (props) => {
  const sale = props.sale;
  const price = props.price;

  return (
    <div>
      {sale > 0 ? (
        <div className={classes.price}>
          <p className={classes["old-price"]}>{price}$</p>
          <div className={classes["new-price"]}>
            <p>{helpers.calculateSalePrice(price, sale)}$</p>
            <p>You Save {(price * (sale / 100)).toFixed(2)}$</p>
          </div>
        </div>
      ) : (
        <p className={classes.price}>{price}$</p>
      )}
    </div>
  );
};

export default PriceElement;

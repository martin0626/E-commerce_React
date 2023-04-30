import { Link } from "react-router-dom";
import classes from "./Order.module.css";

const OrderSection = (props) => {
  const firstName = props.order.first_name;
  const lastName = props.order.last_name;
  const email = props.order.email;

  return (
    <div className={classes["order-page"]}>
      <div className={classes["order-section"]}>
        <div className={classes.info}>
          <p className={classes.about}>
            {firstName} {lastName}, your order was succsessfully processed!
          </p>
          <p className={classes.about}>
            We sent information about your order on Email: {email}.
          </p>
          <p className={classes.warn}>
            Please, if your information is incorrect, write us on our Email:
            helpShop@gmail.com
          </p>
          <Link to="/shop" className={classes["shop-btn"]}>
            Shop More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSection;

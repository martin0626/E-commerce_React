import CheckoutForm from "./CheckoutForm";
import CheckoutInfo from "./CheckoutInfo";
import classes from "./Checkout.module.css";

const CheckoutSection = () => {
  return (
    <section className={classes["checkout-section"]}>
      <CheckoutInfo />
      <CheckoutForm />
    </section>
  );
};

export default CheckoutSection;

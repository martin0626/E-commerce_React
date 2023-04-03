import { Form } from "react-router-dom";
import classes from "./CheckoutForm.module.css";

const CheckoutForm = () => {
  return (
    <div className={classes["form-section"]}>
      <h1>Please fill in your delivery details</h1>
      <div className={classes.form}>
        <Form method="post" action="/checkout">
          <label for="fname">First name:</label>
          <input id="fname" name="fname"></input>
          <label for="lname">Last name:</label>
          <input id="lname" name="lname"></input>
          <label for="phone">Phone:</label>
          <input id="phone" name="phone"></input>
          <label for="email">Email:</label>
          <input id="email" name="email"></input>
          <label for="city">City:</label>
          <input id="city" name="city"></input>
          <button type="submit">Order</button>
        </Form>
      </div>
    </div>
  );
};

export default CheckoutForm;

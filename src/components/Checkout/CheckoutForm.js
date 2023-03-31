import classes from "./CheckoutForm.module.css";

const CheckoutForm = () => {
  return (
    <div className={classes["form-section"]}>
      <h1>Please fill in your delivery details</h1>
      <div className={classes.form}>
        <form>
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
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;

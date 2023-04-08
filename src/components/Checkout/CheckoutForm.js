import { Form } from "react-router-dom";
import classes from "./CheckoutForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../Store/cart";

const CheckoutForm = () => {
  let cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  console.log(cartItems);
  let cartDescription = cartItems.map((el) => {
    return `ID - ${el.id}: ${el.title} X ${el.quantity} Size - ${el.size}  `;
  });

  let cartItemsIds = cartItems.map((el) => el.id);

  const onSubmitHandler = () => {
    dispatch(cartAction.ClearCart());
  };

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
          <label for="address">Address:</label>
          <input
            id="address"
            placeholder="Town, Street, etc..."
            name="address"
          ></input>
          <input
            id="cart"
            name="cart"
            style={{ display: "none" }}
            value={cartItemsIds}
          ></input>
          <input
            id="description"
            name="description"
            style={{ display: "none" }}
            value={cartDescription}
          ></input>
          <button onClick={onSubmitHandler} type="submit">
            Order
          </button>
        </Form>
      </div>
    </div>
  );
};

export default CheckoutForm;

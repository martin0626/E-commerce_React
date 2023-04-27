import { Form, useActionData } from "react-router-dom";
import classes from "./CheckoutForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../Store/cart";

const CheckoutForm = () => {
  const actionData = useActionData();
  console.log(actionData);
  let cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  let cartDescription = cartItems.map((el) => {
    return `ID - ${el.id}: ${el.title} X ${el.quantity} Size - ${el.size}  `;
  });

  let cartItemsIds = cartItems.map((el) => el.id);

  const onSubmitHandler = () => {
    // setTimeout(() => {
    //   dispatch(cartAction.ClearCart());
    // }, 1000);
  };

  // TODO add Style For Errros

  return (
    <div className={classes["form-section"]}>
      <h1>Please fill in your delivery details</h1>
      <div className={classes.form}>
        <Form method="post" action="/checkout">
          {actionData && (
            <p className={classes["checkout-errors"]}>
              {actionData.first_name}
            </p>
          )}
          <label for="first_name">First name:</label>
          <input id="first_name" name="first_name"></input>

          {actionData && (
            <p className={classes["checkout-errors"]}>{actionData.last_name}</p>
          )}
          <label for="last_name">Last name:</label>
          <input id="last_name" name="last_name"></input>

          {actionData && (
            <p className={classes["checkout-errors"]}>{actionData.phone}</p>
          )}
          <label for="phone">Phone:</label>
          <input id="phone" name="phone"></input>

          {actionData && (
            <p className={classes["checkout-errors"]}>{actionData.email}</p>
          )}
          <label for="email">Email:</label>
          <input id="email" name="email"></input>

          {actionData && (
            <p className={classes["checkout-errors"]}>{actionData.address}</p>
          )}
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

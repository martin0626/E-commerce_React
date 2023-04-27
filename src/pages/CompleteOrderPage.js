import { useDispatch } from "react-redux";
import { useActionData, useLoaderData } from "react-router";
import { cartAction } from "../Store/cart";

const CompleteOrderPage = () => {
  // TODO Add Styling And Component For This Page
  const order = useLoaderData();
  const dispatch = useDispatch();

  setTimeout(() => {
    dispatch(cartAction.ClearCart());
  }, 1000);

  return (
    <div>
      <h1>{order.first_name}</h1>
      <h1>{order.last_name}</h1>
    </div>
  );
};

export default CompleteOrderPage;

export const CompleteOrderLoader = async ({ params }) => {
  const order_id = params.order_id;

  let request = await fetch(`http://localhost:8000/orders/${order_id}/`);
  let response = await request.json();
  return response;
};

import { redirect, useActionData } from "react-router";
import CheckoutSection from "../components/Checkout/Checkout";
import { useDispatch } from "react-redux";
import { cartAction } from "../Store/cart";

const CheckoutPage = () => {
  return <CheckoutSection />;
};

export default CheckoutPage;

export const OrderAction = async ({ request }) => {
  const data = await request.formData();
  let orderData = {
    first_name: data.get("first_name"),
    last_name: data.get("last_name"),
    phone: data.get("phone"),
    email: data.get("email"),
    address: data.get("address"),
    products: JSON.parse(`[${data.get("cart")}]`),
    description: data.get("description"),
  };

  const sendOrder = await fetch("http://localhost:8000/orders/create/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  });

  const response_data = await sendOrder.json();
  const response_status = await sendOrder.status;
  if (response_status !== 201) {
    return response_data;
  }

  return redirect(`/complete-order/${response_data.id}`);
};

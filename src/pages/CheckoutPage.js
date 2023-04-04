import { redirect } from "react-router";
import CheckoutSection from "../components/Checkout/Checkout";

const CheckoutPage = () => {
  return <CheckoutSection />;
};

export default CheckoutPage;

export const OrderAction = async ({ request }) => {
  const data = await request.formData();
  let orderData = {
    first_name: data.get("fname"),
    last_name: data.get("lname"),
    phone: data.get("phone"),
    email: data.get("email"),
    address: data.get("address"),
  };

  const sendOrder = await fetch("http://localhost:8000/orders/create/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  });

  // TODO Send Cart Data To Server
  const response = await sendOrder.json();
  console.log(response);
  return redirect("/shop");
};

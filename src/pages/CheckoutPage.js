import { redirect } from "react-router";
import CheckoutSection from "../components/Checkout/Checkout";

const CheckoutPage = () => {
  return <CheckoutSection />;
};

export default CheckoutPage;

export const OrderAction = async ({ request }) => {
  const data = await request.formData();
  console.log(data.get("fname"));
  return redirect("/shop");
};

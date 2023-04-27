import { createBrowserRouter, RouterProvider } from "react-router-dom/dist";
import "./App.css";
import CartElement from "./pages/CartPage";
import CheckoutPage, { OrderAction } from "./pages/CheckoutPage";
import HomeElement from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import LayoutElement from "./pages/RootLayoutPage";
import ShopElement from "./pages/ShopPage";
import CompleteOrderPage, {
  CompleteOrderLoader,
} from "./pages/CompleteOrderPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutElement />,
    children: [
      { path: "/", element: <HomeElement /> },
      {
        path: "/shop",
        element: <ShopElement />,
      },
      {
        path: "/shop/:gender",
        element: <ShopElement />,
      },

      {
        path: "/shop/details/:productId",
        element: <ProductDetailsPage />,
      },
      { path: "/cart", element: <CartElement /> },
      {
        path: "/checkout",
        element: <CheckoutPage />,
        action: OrderAction,
      },
      {
        path: "/complete-order/:order_id",
        element: <CompleteOrderPage />,
        loader: CompleteOrderLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

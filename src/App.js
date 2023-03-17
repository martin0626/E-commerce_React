import { createBrowserRouter, RouterProvider } from "react-router-dom/dist";
import "./App.css";
import CartElement from "./pages/CartPage";
import HomeElement from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import LayoutElement from "./pages/RootLayoutPage";
import ShopElement from "./pages/ShopPage";

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
        path: "/shop/:category",
        element: <ShopElement />,
      },

      {
        path: "/shop/details/:productId",
        element: <ProductDetailsPage />,
      },
      { path: "/cart", element: <CartElement /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

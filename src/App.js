import { createBrowserRouter, RouterProvider } from "react-router-dom/dist";
import "./App.css";
import CartElement from "./pages/CartPage";
import HomeElement from "./pages/HomePage";
import LayoutElement from "./pages/RootLayoutPage";
import ShopElement from "./pages/ShopPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutElement />,
    children: [
      { path: "/", element: <HomeElement /> },
      { path: "/shop", element: <ShopElement /> },
      { path: "/cart", element: <CartElement /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

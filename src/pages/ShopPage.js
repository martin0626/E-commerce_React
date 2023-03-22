import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Shop from "../components/Shop/Shop";
import { getAllProducts } from "../Store/products";

const ShopElement = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return <Shop />;
};

export default ShopElement;

import { Fragment, useEffect } from "react";
import { Outlet } from "react-router";
import Navigation from "../components/Main/Navigation";
import NewCartProduct from "../components/Ui/NewCartProduct";
import FooterElement from "../components/Main/Footer";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../Store/products";

const LayoutElement = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <Fragment>
      <Navigation />
      <Outlet />
      <FooterElement />
    </Fragment>
  );
};

export default LayoutElement;

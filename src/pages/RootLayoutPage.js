import { Fragment } from "react";
import { Outlet } from "react-router";
import Navigation from "../components/Main/Navigation";
import NewCartProduct from "../components/Ui/NewCartProduct";
import FooterElement from "../components/Main/Footer";

const LayoutElement = () => {
  return (
    <Fragment>
      <Navigation />
      <Outlet />
      <FooterElement />
    </Fragment>
  );
};

export default LayoutElement;

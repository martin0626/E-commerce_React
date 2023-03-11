import { Fragment } from "react";
import { Outlet } from "react-router";
import Navigation from "../components/MainNav/Navigation";

const LayoutElement = () => {
  return (
    <Fragment>
      <Navigation />
      <Outlet />
    </Fragment>
  );
};

export default LayoutElement;

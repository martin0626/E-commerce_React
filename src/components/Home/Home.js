import { Fragment } from "react";
import Brands from "./BrandsSection";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <Fragment>
      <section className={classes.home}>
        <h1 className="heading-primary">Welcome to My Web Shop</h1>
      </section>
      <Brands></Brands>
    </Fragment>
  );
};

export default Home;

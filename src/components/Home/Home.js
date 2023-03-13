import { Fragment } from "react";
import Brands from "./BrandsSection";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <Fragment>
      <section className={classes.home}>
        <div className={classes["home-header"]}>
          <h1 className="heading-primary">Welcome to My Web Shop</h1>
        </div>
      </section>
      <Brands></Brands>
    </Fragment>
  );
};

export default Home;

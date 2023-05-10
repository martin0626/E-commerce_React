import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import LoadingElement from "../Ui/Loading";
import Brands from "./BrandsSection";
import classes from "./Home.module.css";
import ImageSlides from "./ImageSlides";
import CategoriesElement from "./Categories";

const Home = () => {
  return (
    <div className={classes.fade}>
      <section className={classes.home}>
        <div className={classes["home-header"]}>
          <h1 className="heading-primary">Welcome to My Web Shop</h1>
          <p className={classes["heading-text"]}>
            The magic here is in the transform property, which is hiding and
            showing our skip link depending on whether it is focused or not.
            Let’s make it look a little nicer with a quick transition on the
            transform property.
          </p>
          <Link to="/shop" className={classes["header-button"]}>
            Shop Now
          </Link>
        </div>
      </section>
      <CategoriesElement />
      <ImageSlides></ImageSlides>
      <Brands></Brands>
    </div>
  );
};

export default Home;

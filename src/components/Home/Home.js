import { Fragment } from "react";
import Brands from "./BrandsSection";
import classes from "./Home.module.css";
import ImageSlides from "./ImageSlides";

const Home = () => {
  const FetchData = async () => {
    let request = await fetch("http://localhost:8000/products/2/");
    console.log(await request.json());
  };
  return (
    <Fragment>
      <section className={classes.home}>
        <div className={classes["home-header"]}>
          <h1 className="heading-primary">Welcome to My Web Shop</h1>
        </div>
      </section>
      <ImageSlides></ImageSlides>
      <Brands></Brands>
    </Fragment>
  );
};

export default Home;

import { Fragment } from "react";
import Brands from "./BrandsSection";
import classes from "./Home.module.css";

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
      <Brands></Brands>
      <button onClick={FetchData}>Fetch Products</button>
    </Fragment>
  );
};

export default Home;

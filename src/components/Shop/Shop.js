import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import Filter from "./Filter";
import Products from "./Products";
import classes from "./Shop.module.css";

const Shop = () => {
  let { category } = useParams();
  let [queryParams] = useSearchParams();
  //TODO Add Query Params For Size On Filter And Chain Them For More Filtration
  console.log(queryParams.getAll("size"));
  return (
    <section className={classes["shop-section"]}>
      <Filter />
      <Products category={category} />
    </section>
  );
};

export default Shop;

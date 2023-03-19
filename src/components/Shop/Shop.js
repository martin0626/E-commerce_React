import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import Filter from "./Filter";
import Products from "./Products";
import classes from "./Shop.module.css";

const Shop = () => {
  let { category } = useParams();
  let [queryParams] = useSearchParams();
  let sizeFilter = queryParams.get("size");

  return (
    <section className={classes["shop-section"]}>
      <Filter />
      <Products category={category} filter={sizeFilter} />
    </section>
  );
};

export default Shop;

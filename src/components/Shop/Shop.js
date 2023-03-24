import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import Filter from "./Filter";
import Products from "./Products";
import classes from "./Shop.module.css";

const Shop = () => {
  let { gender } = useParams();
  let [queryParams] = useSearchParams();
  let filter = queryParams.get("filter");

  return (
    <section className={classes["shop-section"]}>
      <Filter />
      <Products gender={gender} filter={filter} />
    </section>
  );
};

export default Shop;

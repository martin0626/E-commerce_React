import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import Filter from "./Filter";
import Products from "./Products";
import classes from "./Shop.module.css";
import LoadingElement from "../Ui/Loading";

const Shop = () => {
  let { gender } = useParams();
  let [queryParams] = useSearchParams();
  const isLoading = useSelector((state) => state.ui.isLoading);
  let filter = queryParams.get("filter");
  let size = queryParams.get("size");

  // TODO Finish Size Filters
  console.log(size);

  return (
    <section className={classes["shop-section"]}>
      <Filter />

      {isLoading ? (
        <LoadingElement />
      ) : (
        <Products gender={gender} filter={filter} />
      )}
    </section>
  );
};

export default Shop;

import Filter from "./Filter";
import Products from "./Products";
import classes from "./Shop.module.css";

const Shop = () => {
  return (
    <section className={classes["shop-section"]}>
      <Filter />
      <Products />
    </section>
  );
};

export default Shop;

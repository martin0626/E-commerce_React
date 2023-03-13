import { useSelector } from "react-redux";
import classes from "./Products.module.css";
import SingleProduct from "./SingleProduct";

const Products = () => {
  const products = useSelector((state) => state.products.products);
  return (
    <div className={classes.products}>
      {products.map((product) => (
        <SingleProduct product={product} />
      ))}
    </div>
  );
};

export default Products;

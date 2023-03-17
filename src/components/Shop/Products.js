import { useSelector } from "react-redux";
import classes from "./Products.module.css";
import SingleProduct from "./SingleProduct";

const Products = (props) => {
  const category = props.category;
  let products = useSelector((state) => state.products.products);

  if (category) {
    products = products.filter((pr) => pr.gender === category);
  }

  return (
    <div className={classes.products}>
      {products.length > 0 ? (
        products.map((product) => <SingleProduct product={product} />)
      ) : (
        <h1 className={classes.empty}>NO Products Yet</h1>
      )}
    </div>
  );
};

export default Products;

import { useSelector } from "react-redux";
import classes from "./Products.module.css";
import SingleProduct from "./SingleProduct";

const sizeFilter = (sizes, currSize) => {
  let isAvailable = false;
  sizes.forEach((s) => {
    if (s.size === currSize) {
      isAvailable = true;
    }
  });

  return isAvailable;
};

const Products = (props) => {
  const gender = props.gender;
  const filter = props.filter;
  const size = props.size;

  let products = useSelector((state) => state.products.products);
  if (size && size != "All") {
    products = products.filter((pr) => true === sizeFilter(pr.size, size));
  }

  if (gender) {
    products = products.filter(
      (pr) => pr.gender.toLowerCase() === gender.toLowerCase()
    );
  }

  if (filter && filter != "All") {
    products = products.filter((pr) => pr.category.title === filter);
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

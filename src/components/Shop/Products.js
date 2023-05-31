import classes from "./Products.module.css";
import SingleProduct from "./SingleProduct";

const Products = (props) => {
  const products = props.products;

  return (
    <div className={classes.products}>
      {products.length > 0 ? (
        products.map((product) => (
          <SingleProduct key={product.id} product={product} />
        ))
      ) : (
        <h1 className={classes.empty}>NO Products Yet</h1>
      )}
    </div>
  );
};

export default Products;

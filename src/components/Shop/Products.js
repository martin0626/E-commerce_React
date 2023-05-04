import classes from "./Products.module.css";
import SingleProduct from "./SingleProduct";

const sizeFilter = (sizes, fiterSizes) => {
  let isAvailable = false;
  sizes.forEach((size) => {
    if (fiterSizes.includes(size.size)) {
      isAvailable = true;
    }
  });

  return isAvailable;
};

const Products = (props) => {
  const gender = props.gender;
  let products = props.products;
  const categories = props.categories;
  const sizes = props.sizes;

  if (categories.length > 0) {
    products = products.filter((product) =>
      categories.includes(product.category.title)
    );
  }

  if (sizes.length > 0) {
    products = products.filter((product) => sizeFilter(product.size, sizes));
  }

  if (gender) {
    products = products.filter(
      (pr) => pr.gender.toLowerCase() === gender.toLowerCase()
    );
  }

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

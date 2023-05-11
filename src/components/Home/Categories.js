import { redirect } from "react-router";
import useFetch from "../../hooks/use-fetch";
import classes from ".//Categories.module.css";
import { Link } from "react-router-dom";

const CategoriesElement = () => {
  const categories = useFetch("http://localhost:8000/products/categories/");
  console.log(categories);

  const redirectToCategoryHandler = () => {
    return redirect("shop");
  };

  return (
    <section className={classes["categories-section"]}>
      <h1 className={classes.heading}>See Our Categories</h1>

      <div className={classes["home-categories"]}>
        {categories[0].map((category) => (
          <div
            key={category.id}
            onClick={redirectToCategoryHandler}
            className={classes["category-container"]}
          >
            <Link to={`shop?category=${category.title}`}>
              <img className={classes["ctg-img"]} src={category.image} />
            </Link>
            <h1>{category.title}</h1>
          </div>
        ))}
        <a className={classes.prev}>&#10094;</a>
        <a className={classes.next}>&#10095;</a>
      </div>
    </section>
  );
};

export default CategoriesElement;

import Slider from "react-slick";

import useFetch from "../../hooks/use-fetch";
import classes from ".//Categories.module.css";
import CategoryItem from "./CategoryItem";

const CategoriesElement = () => {
  const categories = useFetch("http://localhost:8000/products/categories/");

  return (
    <div className={classes["categories-section"]}>
      <h1 className={classes.heading}>See Our Categories</h1>
      {/* TODO Finish Slider */}
      {/* <Slider
        className={classes["home-categories"]}
        speed={500}
        slidesToShow={2}
        slidesToScroll={1}
      ></Slider> */}
      <div className={classes["home-categories"]}>
        {categories[0].map((category, index) => (
          <CategoryItem key={index} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesElement;

{
  /* <a className={classes.prev}>&#10094;</a> */
}
{
  /* <a className={classes.next}>&#10095;</a> */
}

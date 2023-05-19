import Slider from "react-slick";

import useFetch from "../../hooks/use-fetch";
import classes from ".//Categories.module.css";
import CategoryItem from "./CategoryItem";
import { useSelector } from "react-redux";
import LoadingElement from "../Ui/Loading";

const CustomArrow = (props) => {
  return (
    <div
      className={props.className}
      style={{
        display: "block",
        background: "#33333396",
        "border-radius": "8px",
        padding: "12px",
      }}
      onClick={props.onClick}
    />
  );
};

const CategoriesElement = () => {
  const isLoading = useSelector((state) => state.ui.isLoading);

  const categories = useFetch("http://localhost:8000/products/categories/");
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className={classes.container}>
      <h1>Categories</h1>
      {isLoading && <LoadingElement />}
      <Slider
        {...settings}
        prevArrow={<CustomArrow />}
        nextArrow={<CustomArrow />}
      >
        {categories[0].map((category, index) => (
          <CategoryItem key={index} category={category} />
        ))}
      </Slider>
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

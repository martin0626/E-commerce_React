import { Link } from "react-router-dom";

import classes from "./CategoryItem.module.css";

const CategoryItem = (props) => {
  const category = props.category;
  console.log("category");
  return (
    <div key={category.id} className={classes["category-container"]}>
      <Link to={`shop?category=${category.title}`}>
        <img className={classes["ctg-img"]} src={category.image} />
      </Link>
      <h1>{category.title}</h1>
    </div>
  );
};

export default CategoryItem;

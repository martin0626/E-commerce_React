import { useState } from "react";
import classes from "./FilterElements.module.css";
import { Form } from "react-router-dom";

const FilterElements = (props) => {
  const categories = props.categories;
  const sizes = props.sizes;

  // Filters Show & Hide Actions
  const [isOpenSizes, setIsOpenSizes] = useState(false);
  const [isOpenCategories, setIsOpenCategories] = useState(false);

  const openCategoriesHandler = () => {
    setIsOpenCategories(!isOpenCategories);
  };

  const openSizesHandler = () => {
    setIsOpenSizes(!isOpenSizes);
  };

  // TODO Add Styling To Checkbox Input: https://www.w3schools.com/howto/howto_css_custom_checkbox.asp
  // TODO Handle Form Submit And Finish Styling
  return (
    <div className={classes["filter-elements"]}>
      <Form>
        <div className={classes.categories}>
          <div
            onClick={openCategoriesHandler}
            className={classes["ctg-button"]}
          >
            <p>Categories</p>
            {isOpenCategories ? (
              <i class="fas fa-angle-up"></i>
            ) : (
              <i class="fas fa-angle-down"></i>
            )}
          </div>
          {isOpenCategories && (
            <div className={classes["elements-list"]}>
              {categories.map((category) => (
                <div key={category.id} className={classes["radio-choise"]}>
                  <input
                    type="checkbox"
                    id={category.id}
                    name={category.title}
                    value={category.title}
                  />
                  <label for={category.id}>{category.title}</label>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className={classes.sizes}>
          <div onClick={openSizesHandler} className={classes["ctg-button"]}>
            <p>Sizes</p>
            {isOpenSizes ? (
              <i class="fas fa-angle-up"></i>
            ) : (
              <i class="fas fa-angle-down"></i>
            )}
          </div>
          {isOpenSizes && (
            <div className={classes["elements-list"]}>
              {sizes.map((size) => (
                <div key={size.id} className={classes["radio-choise"]}>
                  <input
                    type="checkbox"
                    id={size.id}
                    name={size.size}
                    value={size.size}
                  />
                  <label for={size.id}>{size.size}</label>
                </div>
              ))}
            </div>
          )}
        </div>
        <button type="submit">Filter</button>
      </Form>
    </div>
  );
};

export default FilterElements;

import { useState } from "react";
import classes from "./FilterElements.module.css";
import { Form, Link, useSearchParams } from "react-router-dom";

const FilterElements = (props) => {
  let [searchParams] = useSearchParams();
  const [sizeFilters, setSizeFilters] = useState(searchParams.getAll("size"));
  const [categoryFilters, setCategoryFilters] = useState(
    searchParams.getAll("category")
  );

  const categories = props.categories;
  const sizes = props.sizes;
  console.log(categoryFilters);

  // Filters Show & Hide Actions
  const [isOpenSizes, setIsOpenSizes] = useState(false);
  const [isOpenCategories, setIsOpenCategories] = useState(false);

  const refreshFiltersHandler = () => {
    setCategoryFilters([]);
    setIsOpenCategories(false);

    setSizeFilters([]);
    setIsOpenSizes(false);
  };

  const openCategoriesHandler = () => {
    setIsOpenCategories(!isOpenCategories);
  };

  const openSizesHandler = () => {
    setIsOpenSizes(!isOpenSizes);
  };

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
              {categories &&
                categories.map((category) => (
                  <div key={category.id} className={classes["radio-choise"]}>
                    <input
                      type="checkbox"
                      id={category.id}
                      name="category"
                      value={category.title}
                      defaultChecked={categoryFilters.includes(category.title)}
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
              {sizes &&
                sizes.map((size) => (
                  <div key={size.id} className={classes["radio-choise"]}>
                    <input
                      type="checkbox"
                      id={size.id}
                      name="size"
                      value={size.size}
                      defaultChecked={sizeFilters.includes(size.size)}
                    />
                    <label for={size.id}>{size.size}</label>
                  </div>
                ))}
            </div>
          )}
        </div>
        <div className={classes["btn-section"]}>
          <button
            className={`${classes.btn} ${classes["filter-btn"]}`}
            type="submit"
          >
            Filter
          </button>
        </div>
        <div className={classes["clear-btn"]}>
          <Link
            onClick={refreshFiltersHandler}
            to={"/shop"}
            className={classes.btn}
          >
            Clear Filters
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default FilterElements;

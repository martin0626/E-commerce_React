import { useState, useEffect } from "react";
import classes from "./Filter.module.css";
import FilterElements from "./FilterElements";

const Filter = () => {
  const [categories, setCategories] = useState(null);
  const [sizes, setSizes] = useState(null);

  // Fetching Filter Elements From Server And Set Data To State
  useEffect(() => {
    const fetchCategories = async () => {
      let requestCategories = await fetch(
        `http://localhost:8000/products/categories/`
      );
      const responseCategories = await requestCategories.json();
      setCategories(responseCategories);
    };

    const fetchSizes = async () => {
      let requestSizes = await fetch("http://localhost:8000/products/sizes/");
      const responseSizes = await requestSizes.json();
      setSizes(responseSizes);
    };

    fetchCategories();
    fetchSizes();
  }, []);

  return (
    <div className={classes.filter}>
      <FilterElements categories={categories} sizes={sizes} />
    </div>
  );
};

export default Filter;

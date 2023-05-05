import { useState, useEffect } from "react";
import classes from "./Filter.module.css";
import FilterElements from "./FilterElements";
import useFetch from "../../hooks/use-fetch";

const Filter = () => {
  const [categories] = useFetch("http://localhost:8000/products/categories/");
  const [sizes] = useFetch("http://localhost:8000/products/sizes/");

  return (
    <div className={classes.filter}>
      <FilterElements categories={categories} sizes={sizes} />
    </div>
  );
};

export default Filter;

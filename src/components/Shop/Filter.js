import { useState, useEffect } from "react";
import classes from "./Filter.module.css";
import FilterElements from "./FilterElements";
import useFetch from "../../hooks/use-fetch";
import { useSelector } from "react-redux";
import LoadingElement from "../Ui/Loading";

const Filter = () => {
  const [categories] = useFetch("http://localhost:8000/products/categories/");
  const [sizes] = useFetch("http://localhost:8000/products/sizes/");
  const isLoading = useSelector((state) => state.ui.isLoading);

  return (
    <div className={classes.filter}>
      {isLoading && <LoadingElement />}
      <FilterElements categories={categories} sizes={sizes} />
    </div>
  );
};

export default Filter;

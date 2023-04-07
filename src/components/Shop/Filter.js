import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import classes from "./Filter.module.css";

const Filter = () => {
  const [isOpenWomen, setIsOpenWomen] = useState(false);
  const [isOpenMen, setIsOpenMen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [categories, setCategories] = useState([]);
  const [sizes, setSizes] = useState([]);

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

  const openMenHandler = () => {
    setIsOpenMen(!isOpenMen);
  };

  const openWomenHandler = () => {
    setIsOpenWomen(!isOpenWomen);
  };

  const filterHandler = (e) => {
    let currFilter = e.target.textContent;
    let sizeFilter = searchParams.get("size");

    if (sizeFilter) {
      setSearchParams({ filter: currFilter, size: sizeFilter });
      return;
    }

    setSearchParams({ filter: currFilter });
  };

  const sizeFilterHandler = (e) => {
    let currSize = e.target.textContent;
    let filter = searchParams.get("filter");

    if (filter) {
      setSearchParams({ size: currSize, filter: searchParams.get("filter") });
      return;
    }
    setSearchParams({ size: currSize });
  };
  return (
    <div className={classes.filter}>
      <ul>
        <div
          onClick={openMenHandler}
          className={
            isOpenMen ? `${classes.filter} ${classes.open}` : classes.filter
          }
        >
          <li className={classes.category}>
            <a>
              Filters <span>&#8711;</span>
            </a>
          </li>
          <ul className={classes["dropdown-content"]}>
            <div className={classes.detail} />

            <li onClick={filterHandler}>
              <a>All</a>
            </li>
            {categories &&
              categories.map((c) => (
                <li onClick={filterHandler}>
                  <a>{c.title}</a>
                </li>
              ))}
          </ul>
        </div>

        <div
          onClick={openWomenHandler}
          className={
            isOpenWomen ? `${classes.filter} ${classes.open}` : classes.filter
          }
        >
          <li className={classes.category}>
            <a>
              Sizes <span>&#8711;</span>
            </a>
          </li>
          <ul className={classes["dropdown-content"]}>
            <div className={classes.detail} />
            <li onClick={sizeFilterHandler}>
              <a href="#">All</a>
            </li>
            {sizes &&
              sizes.map((el) => (
                <li onClick={sizeFilterHandler}>
                  <a href="#">{el.size}</a>
                </li>
              ))}
          </ul>
        </div>
      </ul>
    </div>
  );
};

export default Filter;

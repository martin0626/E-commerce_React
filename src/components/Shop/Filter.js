import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import classes from "./Filter.module.css";

const Filter = () => {
  const [isOpenWomen, setIsOpenWomen] = useState(false);
  const [isOpenMen, setIsOpenMen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      let request = await fetch(`http://localhost:8000/products/categories/`);
      const response = await request.json();
      setCategories(response);
    };

    fetchCategories();
  }, []);

  const openMenHandler = () => {
    setIsOpenMen(!isOpenMen);
  };

  const openWomenHandler = () => {
    setIsOpenWomen(!isOpenWomen);
  };

  const filterHandler = (e) => {
    let currFilter = e.target.textContent;
    if (currFilter != "All") {
      setSearchParams({ filter: currFilter });
      return;
    }
    setSearchParams();
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
            <li>
              <a href="#">S</a>
            </li>
            <li>
              <a href="#">M</a>
            </li>
            <li>
              <a href="#">L</a>
            </li>
            <li>
              <a href="#">XL</a>
            </li>
          </ul>
        </div>
      </ul>
    </div>
  );
};

export default Filter;

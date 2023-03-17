import { useState } from "react";
import classes from "./Filter.module.css";

const Filter = () => {
  const [isOpenWomen, setIsOpenWomen] = useState(false);
  const [isOpenMen, setIsOpenMen] = useState(false);

  const openMenHandler = () => {
    setIsOpenMen(!isOpenMen);
  };

  const openWomenHandler = () => {
    setIsOpenWomen(!isOpenWomen);
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
              Size <span>&#8711;</span>
            </a>
          </li>
          <ul className={classes["dropdown-content"]}>
            <li className={classes.category}>
              <a href="#">S</a>
            </li>
            <li className={classes.category}>
              <a href="#">M</a>
            </li>
            <li className={classes.category}>
              <a href="#">L</a>
            </li>
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
              Women <span>&#8711;</span>
            </a>
          </li>
          <ul className={classes["dropdown-content"]}>
            <li className={classes.category}>
              <a href="#">Women</a>
            </li>
            <li className={classes.category}>
              <a href="#">Women</a>
            </li>
            <li className={classes.category}>
              <a href="#">Women</a>
            </li>
          </ul>
        </div>
      </ul>
    </div>
  );
};

export default Filter;

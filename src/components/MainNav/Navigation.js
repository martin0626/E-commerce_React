import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className={classes.navigation}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? classes.active : "")}
        end
      >
        Home
      </NavLink>
      <div className={classes.dropdown}>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive
              ? `${classes.active} ${classes["drp-btn"]}`
              : classes["drp-btn"]
          }
          end
        >
          Shop
          {/* <i class="fa fa-caret-down"></i> */}
        </NavLink>
        <div className={classes["drp-content"]}>
          <NavLink
            className={({ isActive }) => (isActive ? classes.active : "")}
          >
            Link 1
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? classes.active : "")}
          >
            Link 2
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? classes.active : "")}
          >
            Link 3
          </NavLink>
        </div>
      </div>
      <div>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive
              ? `fa fa-shopping-cart ${classes.active}`
              : "fa fa-shopping-cart"
          }
        ></NavLink>
      </div>
    </nav>
  );
};

export default Navigation;

import classes from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchElement from "../Search/Search";

const Navigation = () => {
  const cartQuantity = useSelector((state) => state.cart.quantity);

  return (
    <nav className={classes.navigation}>
      <div className={classes["home-part"]}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? classes.active : "")}
          end
        >
          Home
        </NavLink>
      </div>
      <SearchElement />
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
            to="shop/men"
            className={({ isActive }) => (isActive ? classes.active : "")}
          >
            Men
          </NavLink>
          <NavLink
            to="shop/women"
            className={({ isActive }) => (isActive ? classes.active : "")}
          >
            Women
          </NavLink>
        </div>
      </div>
      <div className={classes.cart}>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive
              ? `fa fa-shopping-cart ${classes.active}`
              : "fa fa-shopping-cart"
          }
        ></NavLink>
        <div className={classes["cart-quantity"]}>{cartQuantity}</div>
      </div>
    </nav>
  );
};

export default Navigation;

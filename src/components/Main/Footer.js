import { Form, Link } from "react-router-dom";
import classes from "./Footer.module.css";

const FooterElement = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.about}>
        <div className={`${classes.social}`}>
          <i className="fa fa-facebook-square"></i>
          <i className="fa fa-github-square"></i>
          <i className="fa fa-instagram-square"></i>
        </div>
        <div className={`${classes.navigation} ${classes["flex-column"]}`}>
          <Link to={"/"}>Home</Link>
          <Link to={"/shop"}>Shop</Link>
          <Link to={"/cart"}>Cart</Link>
        </div>
        <div className={classes.contact}>
          <Form>
            <input placeholder="Email..."></input>
            <button type="submit">Subscribe</button>
          </Form>
        </div>
      </div>
      <div className={classes.author}></div>
    </div>
  );
};

export default FooterElement;

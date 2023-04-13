import { Form, Link } from "react-router-dom";
import classes from "./Footer.module.css";

const FooterElement = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.about}>
        <div className={`${classes.social}`}>
          <i className="fab fa-facebook-square"></i>
          <i className="fab fa-github-square"></i>
          <i className="fab fa-instagram-square"></i>
        </div>
        <div className={`${classes.navigation} ${classes["flex-column"]}`}>
          <Link>Home</Link>
          <Link>Shop</Link>
          <Link>Cart</Link>
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

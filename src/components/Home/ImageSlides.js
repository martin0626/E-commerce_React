import classes from "./ImageSlides.module.css";

const ImageSlides = () => {
  return (
    <div className={classes["slide-container"]}>
      <div className={`${classes.fade} ${classes.slide} ${classes.active}`}>
        <img
          className={classes["slide-image"]}
          src="https://i.insider.com/5d68393e2e22af2a6e5aba14?width=1136&format=jpeg"
        />
      </div>
      <div className={`${classes.fade} ${classes.slide}`}>
        <img
          className={classes["slide-image"]}
          src="https://newspaperads.ads2publish.com/wp-content/uploads/2018/10/reebok-clothing-your-move-is-not-mine-ad-times-of-india-mumbai-13-10-2018.png"
        />
      </div>
      <div className={`${classes.fade} ${classes.slide}`}>
        <img
          className={classes["slide-image"]}
          src="https://i.ytimg.com/vi/fujboh-W7Sk/maxresdefault.jpg"
        />
      </div>
      <a className={classes.next}>&#10094;</a>
      <a className={classes.prev}>&#10095;</a>
      <div className={classes.dots}>
        <span className={classes.dot}></span>
        <span className={classes.dot}></span>
        <span className={classes.dot}></span>
      </div>
    </div>
  );
};

export default ImageSlides;

import { useState } from "react";
import classes from "./ImageSlides.module.css";

let images = [
  {
    id: "1",
    img: "https://i.insider.com/5d68393e2e22af2a6e5aba14?width=1136&format=jpeg",
  },
  {
    id: "2",
    img: "https://th.bing.com/th?id=OIP.JGJfbwATNdQjAZjgW9MWIgHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  },
  {
    id: "3",
    img: "https://th.bing.com/th?id=OIP.WlTthXGmL7Ax0lYId5fCGwHaFS&w=295&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
  },
];

const ImageSlides = () => {
  let [currIndex, setCurrIndex] = useState(0);
  // let [activeImage, setActiveImage] = useState(images[0].id);
  console.log(currIndex, "Outside");

  const changeIndexHandler = (step) => {
    let index = currIndex + step;

    if (index === images.length) {
      setCurrIndex(0);
      // setActiveImage(images[currIndex].id);
      return;
    }
    if (index < 0) {
      setCurrIndex(images.length - 1);
      // setActiveImage(images[currIndex].id);
      return;
    }

    setCurrIndex(index);
    // setActiveImage(images[currIndex].id);
  };

  return (
    <div className={classes["slide-container"]}>
      <div className={`${classes.fade} ${classes.slide} ${classes.active}`}>
        <img className={classes["slide-image"]} src={images[currIndex].img} />
      </div>
      <a
        className={classes.next}
        onClick={() => {
          changeIndexHandler(-1);
        }}
      >
        &#10094;
      </a>
      <a
        className={classes.prev}
        onClick={() => {
          changeIndexHandler(1);
        }}
      >
        &#10095;
      </a>
      <div className={classes.dots}>
        {images.map((el) => (
          <span
            className={`${
              images[currIndex].id === el.id && classes["active-dot"]
            } ${classes.dot}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlides;

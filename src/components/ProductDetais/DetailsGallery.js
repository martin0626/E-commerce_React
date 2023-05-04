import { useState } from "react";
import classes from "./DetailsGallery.module.css";

const DetailGallery = (props) => {
  const product = props.product;
  const gallery = product.gallery;
  const [openedImage, setOpenedImage] = useState(null);

  const openImageHandler = (image) => {
    setOpenedImage(image);
    console.log(image);
  };

  const closeImageHandler = () => {
    setOpenedImage(null);
  };

  return (
    <div className={classes["images-content"]}>
      {openedImage && (
        <div className={classes["image-modal"]}>
          <a onClick={closeImageHandler} className={classes.close}>
            <i className="fas fa-times" aria-hidden="true"></i>
          </a>
          <img src={openedImage}></img>
        </div>
      )}
      <div className={classes.image}>
        <img
          onClick={() => openImageHandler(product.image)}
          src={product.image}
        />
      </div>
      <div className={classes.gallery}>
        {gallery &&
          gallery.map((el) => (
            <img
              key={el.id}
              onClick={() => openImageHandler(el.image)}
              src={el.image}
            />
          ))}
      </div>
    </div>
  );
};

export default DetailGallery;

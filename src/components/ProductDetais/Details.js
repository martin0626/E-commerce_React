import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router";
import classes from "./Details.module.css";
import DetailsDescription from "./DetailsDescription";
import DetailGallery from "./DetailsGallery";
import LoadingElement from "../Ui/Loading";

const DetailsElement = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      let request = await fetch(`http://localhost:8000/products/${productId}/`);
      const response = await request.json();
      setProduct(response);
    };

    fetchProduct();
  }, []);

  return (
    <Fragment>
      {product ? (
        <section className={classes.details}>
          <DetailGallery product={product} />
          <DetailsDescription product={product} />
        </section>
      ) : (
        <div className={classes["not-exist"]}>
          <LoadingElement />
        </div>
      )}
    </Fragment>
  );
};

export default DetailsElement;

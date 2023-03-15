import { useSelector } from "react-redux";
import { useParams } from "react-router";
import DetailsElement from "../components/ProductDetais/Details";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const product = useSelector((state) => state.products.products).find(
    (p) => p.id === productId
  );
  return <DetailsElement product={product} />;
};

export default ProductDetailsPage;

const CartProduct = (props) => {
  const product = props.product;
  return <h1>{product.description}</h1>;
};

export default CartProduct;

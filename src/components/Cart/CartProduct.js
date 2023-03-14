import { useDispatch } from "react-redux";
import { cartAction } from "../../Store/cart";

const CartProduct = (props) => {
  const product = props.product;
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(cartAction.RemoveItemFromCart(product.id));
  };
  return (
    <div>
      <h3>
        {product.description} : {product.quantity}
      </h3>
      <button onClick={deleteHandler}>Del</button>
    </div>
  );
};

export default CartProduct;

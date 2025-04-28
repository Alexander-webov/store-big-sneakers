import { useDispatch } from "react-redux";
import iconCartForButton from "../assets/images/cart2.png";
import { addItem } from "../features/Cart/cartSlice";

function AddToCart({ cartItems = [] }) {
  console.log(cartItems);
  const dispatch = useDispatch();

  function handelAddCart() {
    dispatch(addItem(cartItems));
  }

  return (
    <button
      className="flex items-center text-[#4440FF] py-4 px-5 bg-[#c2c2ff]"
      onClick={handelAddCart}
    >
      <img src={iconCartForButton} alt="cart" />
      <span className="ml-2">Add To Cart</span>
    </button>
  );
}

export default AddToCart;

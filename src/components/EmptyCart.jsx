import ButtonBack from "./ButtonBack";

function EmptyCart() {
  return (
    <div className="text-center text-5xl text-sky-600 my-32">
      <div className="my-5"> The cart is empty</div>
      <ButtonBack />
    </div>
  );
}

export default EmptyCart;

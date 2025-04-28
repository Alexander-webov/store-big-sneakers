import { useSelector } from "react-redux";
import CounterProduct from "../../components/CounterProduct";
import VoucherCode from "../../components/VoucherCode";
import CartTable from "../../components/CartTable";

function Cart() {
  const cart = useSelector((store) => store.cart.cart);
  console.log(cart);
  return (
    <div>
      <div className="overflow-x-auto">
        <CartTable cart={cart} />
      </div>

      <div>
        <div>
          <VoucherCode />
        </div>
        <div>
          <ul className="text-[#262626] w-96">
            <li className="flex ">
              <span>Subtotal</span>
              <span>$998</span>
            </li>
            <li>
              <span>Shipping fee</span>
              <span>$20</span>
            </li>
            <li>
              <span>Coupon</span>
              <span>No</span>
            </li>
            <li className="text-[#22262A]">
              <span>TOTAL</span>
              <span>$1018</span>
            </li>
          </ul>
          <button className="w-96 bg-[#4440FF] text-white">Check out</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;

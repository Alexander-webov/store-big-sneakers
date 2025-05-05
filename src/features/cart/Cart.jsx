import { useSelector } from "react-redux";
import VoucherCode from "../../components/VoucherCode";
import CartTable from "../../components/CartTable";
import { getCart, getTotalPay } from "./cartSlice";
import TotalPay from "../../components/TotalPay";
import EmptyCart from "../../components/EmptyCart";

function Cart() {
  const cart = useSelector(getCart);
  const total = useSelector(getTotalPay);
  const fee = useSelector((store) => store.cart.fee);
  const coupon = useSelector((store) => store.cart.coupon);

  if (cart.length === 0) return <EmptyCart />;
  return (
    <div>
      <div className="overflow-x-auto">
        <CartTable cart={cart} />
      </div>

      <div className="flex justify-between my-24">
        <div>
          <VoucherCode />
        </div>
        <div>
          <TotalPay total={total} fee={fee} coupon={coupon} />
        </div>
      </div>
    </div>
  );
}

export default Cart;

import { Link } from "react-router-dom";

function TotalPay({ total, fee, coupon, subtotal }) {
  return (
    <div>
      <ul className="text-[#262626] w-96">
        <li className="flex justify-between mb-4">
          <span>Subtotal</span>
          <span>${subtotal}</span>
        </li>
        <li className="flex justify-between mb-4">
          <span>Shipping fee</span>
          <span>${fee}</span>
        </li>
        <li className="flex justify-between mb-4">
          <span>Coupon</span>
          <span>{coupon > 0 ? `${coupon}% OFF` : "No"}</span>
        </li>
        <li className="text-[#22262A] flex justify-between mb-10">
          <span>TOTAL</span>
          <span>${total}</span>
        </li>
      </ul>

      <Link
        to="/checkout"
        className="w-96 bg-[#4440FF] text-white px-8 py-4 rounded text-center block hover:bg-[#3330d0] transition"
      >
        Proceed to Checkout
      </Link>
    </div>
  );
}

export default TotalPay;

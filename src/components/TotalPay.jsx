function TotalPay({ total, fee }) {
  return (
    <div>
      <ul className="text-[#262626] w-96">
        <li className="flex justify-between mb-4">
          <span>Subtotal</span>
          <span>${total}</span>
        </li>
        <li className="flex justify-between mb-4">
          <span>Shipping fee</span>
          <span>${fee}</span>
        </li>
        <li className="flex justify-between mb-4">
          <span>Coupon</span>
          <span>No</span>
        </li>
        <li className="text-[#22262A] flex justify-between mb-10">
          <span>TOTAL</span>
          <span>${fee + total}</span>
        </li>
      </ul>
      <button className="w-96 bg-[#4440FF] text-white px-8 py-4">
        Check out
      </button>
    </div>
  );
}

export default TotalPay;

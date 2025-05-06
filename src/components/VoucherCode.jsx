import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeCupon } from "../features/cart/cartSlice";

function VoucherCode() {
  const [code, setCode] = useState("");
  const dispatch = useDispatch();

  function handelForm(e) {
    e.preventDefault();
    if (!code) return;
    dispatch(changeCupon(code.trim()));
  }
  return (
    <form onSubmit={handelForm}>
      <input
        className="h-16 mr-3 px-5  border border-x-stone-400 outline-none bg-[#F6F7F8]"
        type="text"
        placeholder="Have a voucher code? Enter it here to get a discount!"
        onChange={(e) => setCode(e.target.value)}
      />
      <button className="h-16 bg-[#4440FF] text-white px-8 py-4 ">
        Redeem
      </button>
    </form>
  );
}

export default VoucherCode;

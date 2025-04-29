function VoucherCode() {
  return (
    <div>
      <input
        className="h-16 mr-3 px-5  border border-x-stone-400 outline-none"
        type="text"
        placeholder="Voucher code"
      />
      <button className="h-16 bg-[#4440FF] text-white px-8 py-4 ">
        Redeem
      </button>
    </div>
  );
}

export default VoucherCode;

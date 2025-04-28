function CounterProduct({ count, setCount }) {
  function increase() {
    if (count >= 10) return;
    setCount((prevVal) => prevVal + 1);
  }
  function decrease() {
    if (count <= 1) return;
    setCount((prevVal) => prevVal - 1);
  }
  return (
    <div className="bg-[#F6F7F8] px-5 py-3">
      <button onClick={decrease} className="text-[#4440FF]">
        -
      </button>
      <span className="mx-5">{count}</span>
      <button onClick={increase} className="text-[#4440FF]">
        +
      </button>
    </div>
  );
}

export default CounterProduct;

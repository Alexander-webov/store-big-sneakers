import Products from "./Products";

function BestSeller() {
  return (
    <div className="max-w-[1315px] mt-96  mx-auto">
      <h2 className="text-center font-semibold text-4xl">BEST SELLER</h2>
      <ul className="text-center text-2xl flex justify-center gap-14 mt-9 mb-5">
        <li>
          <a href="">All</a>
        </li>
        <li>
          <a href="">WOMEN</a>
        </li>
        <li>
          <a href="">MEN</a>
        </li>
        <li>
          <a href="">UNISEX</a>
        </li>
        <li>
          <a href="">CASUAL</a>
        </li>
      </ul>
      <Products />
    </div>
  );
}

export default BestSeller;

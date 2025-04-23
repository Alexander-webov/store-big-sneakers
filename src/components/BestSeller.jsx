import { useCallback, useState } from "react";
import Products from "./Products";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDataAsync } from "../features/products/productsSlice";

function BestSeller() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductDataAsync());
  }, [dispatch]);

  const [visibleCount, setVisibleCount] = useState(8);
  const products = useSelector((store) => store.product.products);
  const [filterProducts, setFilterProducts] = useState([]);
  const [activeFilter, setActiveFilter] = useState("ALL");

  const resetFilter = useCallback(() => {
    const visibleProduct = products.slice(0, visibleCount);
    setFilterProducts(visibleProduct);
  }, [products, visibleCount]);

  useEffect(() => {
    resetFilter();
  }, [resetFilter]);

  const showMoreProducts = () => {
    setVisibleCount((count) => count + 4);
  };

  const handelFilterProducts = (id) => {
    setActiveFilter(id);
    const filtered =
      id === "ALL"
        ? products
        : products.filter((el) => el.gender?.toUpperCase() === id);
    const visibleProduct = filtered.slice(0, visibleCount);
    setFilterProducts(visibleProduct);
    setVisibleCount(8);
  };

  return (
    <div className="max-w-[1315px] mt-96  mx-auto">
      <h2 className="text-center font-semibold text-4xl">BEST SELLER</h2>
      <ul className="text-center text-2xl flex justify-center gap-14 mt-9 mb-5">
        <li>
          <button
            onClick={() => handelFilterProducts("ALL")}
            className={activeFilter === "ALL" ? "text-blue-500" : ""}
          >
            All
          </button>
        </li>
        <li>
          <button
            onClick={() => handelFilterProducts("WOMEN")}
            className={activeFilter === "WOMEN" ? "text-blue-500" : ""}
          >
            WOMEN
          </button>
        </li>
        <li>
          <button
            onClick={() => handelFilterProducts("MEN")}
            className={activeFilter === "MEN" ? "text-blue-500" : ""}
          >
            MEN
          </button>
        </li>
        <li>
          <button
            onClick={() => handelFilterProducts("UNISEX")}
            className={activeFilter === "UNISEX" ? "text-blue-500" : ""}
          >
            UNISEX
          </button>
        </li>
        <li>
          <button
            onClick={() => handelFilterProducts("CASUAL")}
            className={activeFilter === "CASUAL" ? "text-blue-500" : ""}
          >
            CASUAL
          </button>
        </li>
      </ul>

      <Products visibleProduct={filterProducts} />

      {visibleCount < products.length ? (
        <button
          className="block text-[#33A0FF]  text-2xl font-medium border-b-4 border-[#33A0FF] border-solid mx-auto mt-10"
          onClick={showMoreProducts}
        >
          LOAD MORE
        </button>
      ) : null}
    </div>
  );
}

export default BestSeller;

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import DoubleSlider from "../components/DoubleSlider";
import { getProductDataAsync } from "../features/products/productsSlice";
import Products from "../features/products/Products";
import AdBanner from "../components/AdBanner";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function AllProducts() {
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedRange, setSelectedRange] = useState([0, 100]);

  const [allSizes, setAllSizes] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  const sneakears = useSelector((store) => store.product.products);
  const isLoading = useSelector((store) => store.product.isLoading);

  const dispatch = useDispatch();

  const filteredSneakers = useMemo(() => {
    const EPSILON = 0.5;
    return sneakears.filter((item) => {
      const matchPrices =
        item.price >= selectedRange[0] - EPSILON &&
        item.price <= selectedRange[1] + EPSILON;
      const matchSizes =
        selectedSizes.length === 0 ||
        item.sizes.some((el) => selectedSizes.includes(el));
      return matchPrices && matchSizes;
    });
  }, [selectedRange, sneakears, selectedSizes]);

  useEffect(() => {
    if (sneakears.length === 0) {
      dispatch(getProductDataAsync());
    }
  }, [dispatch, sneakears.length]);

  useEffect(() => {
    if (sneakears.length > 0) {
      const prices = sneakears.map((item) => item.price);
      const min = Math.min(...prices);
      const max = Math.max(...prices);
      setPriceRange([min, max]);
    }
  }, [sneakears]);

  useEffect(() => {
    if (filteredSneakers.length) {
      const sizes = Array.from(
        new Set(filteredSneakers.flatMap((product) => product.sizes))
      );
      setAllSizes(sizes);
    }
  }, [filteredSneakers]);

  function handleSizeFilterChange(e) {
    const { checked, id } = e.target;
    setSelectedSizes((size) =>
      checked ? [...size, id] : size.filter((el) => el !== id)
    );
  }

  return (
    <div className="flex mb-24 ">
      <div className="w-80 mr-16 mt-5">
        <div className="bg-[#F6F7F8] p-5">
          <span className="uppercase">Prices</span>
          <div className="mt-3">
            <DoubleSlider
              min={priceRange[0]}
              max={priceRange[1]}
              onChange={(range) => setSelectedRange(range)}
            />
          </div>
        </div>
        <div className="bg-[#F6F7F8] p-5 mt-5">
          <span className="uppercase block mb-5">size:</span>
          <div>
            {allSizes.map((size) => {
              const isChecked = selectedSizes.includes(size);
              return (
                <label
                  key={size}
                  className={`mr-4 p-2 border rounded cursor-pointer ${
                    isChecked ? "bg-blue-500 text-white" : "bg-white text-black"
                  }`}
                  htmlFor={size}
                >
                  <input
                    className="hidden"
                    type="checkbox"
                    id={size}
                    checked={isChecked}
                    onChange={handleSizeFilterChange}
                  />
                  {size}
                </label>
              );
            })}
          </div>
          <div>
            <button
              className="mt-8 px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
              onClick={() => {
                setSelectedSizes([]);
              }}
            >
              Clear size filters
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <AdBanner />
        <div>Filtered products: {filteredSneakers.length}</div>
        {isLoading ? (
          <div className="grid grid-cols-3 gap-5">
            {Array.from({ length: 16 }).map((_, idx) => (
              <div
                className="flex flex-col shadow-md rounded-lg p-2 bg-white"
                key={idx}
              >
                <Skeleton height={300} borderRadius={12} />
                <Skeleton height={20} className="mt-2" />
                <Skeleton height={20} width={100} className="mt-1" />
              </div>
            ))}
          </div>
        ) : filteredSneakers.length === 0 ? (
          <div className="text-center text-gray-500 mt-10 ">
            No products found. Try adjusting your filters.
          </div>
        ) : (
          <Products cols={3} items={filteredSneakers} />
        )}
      </div>
    </div>
  );
}

export default AllProducts;

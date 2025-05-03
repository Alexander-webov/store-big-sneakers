import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import DoubleSlider from "../components/DoubleSlider";
import { getProductDataAsync } from "../features/products/productsSlice";
import Products from "../features/products/Products";
import AdBanner from "../components/AdBanner";

function AllProducts() {
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedRange, setSelectedRange] = useState([0, 100]);

  const sneakears = useSelector((store) => store.product.products);
  const dispatch = useDispatch();

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
      setSelectedRange([min, max]);
    }
  }, [sneakears]);

  const EPSILON = 0.5;
  const filteredSneakers = sneakears.filter(
    (item) =>
      item.price >= selectedRange[0] - EPSILON &&
      item.price <= selectedRange[1] + EPSILON
  );

  return (
    <div className="flex mb-24">
      <div className="w-72 mr-5 mt-5">
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
      </div>
      <div>
        <AdBanner />
        <div>Filtered products: {filteredSneakers.length}</div>
        <Products items={filteredSneakers} />
      </div>
    </div>
  );
}

export default AllProducts;

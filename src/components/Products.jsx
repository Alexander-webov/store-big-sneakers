import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductDataAsync } from "../features/products/productsSlice";
import Product from "./Product";

function Products() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDataAsync());
  }, [dispatch]);

  const products = useSelector((store) => store.product.products);
  return (
    <div className=" grid grid-cols-4 justify-items-center gap-2 ">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Products;

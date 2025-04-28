import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RatingProduct from "../components/RatingProduct";
import Thumbnails from "../components/Thumbnails";
import { useEffect, useState } from "react";
import { getProductDataAsync } from "../features/products/productsSlice";
import CounterProduct from "../components/CounterProduct";
import AddToCart from "../components/AddToCart";
import FavoriteProduct from "../components/FavoriteProduct";
import SizeProduct from "../components/SizeProduct";
import AdSlider from "../components/AdSlider";

function DetailsProduct() {
  const [size, setSize] = useState(null);
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const { productId } = useParams();
  const products = useSelector((store) => store.product.products);
  const product = products.find((el) => el.id === +productId);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getProductDataAsync());
    }
  }, [dispatch, products.length]);

  useEffect(() => {
    if (product && !size) {
      setSize(product?.sizes?.[0] || null);
    }
  }, [product, size]);

  if (!product) {
    return (
      <div className="text-center mt-20 text-xl text-gray-500">
        Loading product details...
      </div>
    );
  }

  const order = {
    id: product.id,
    quantity: count,
    title: product.title,
    image: product.image,
    price: product.price,
    size: size,
  };

  return (
    <div className="flex justify-between mb-20">
      <div>
        <div className="flex ">
          <div className="max-w-sm">
            <Thumbnails thumbsGallery={product?.thumbsGallery} />
          </div>
          <div className="ml-6 w-96 flex flex-col">
            <h4 className="text-2xl">{product.title}</h4>
            <div className="flex mt-5 pb-5 border-solid border-[#F6F7F8] border-b-2">
              <RatingProduct />
              <span className="ml-4">0 reviews</span>
            </div>
            <div className="mt-3">
              <span className="text-[#4440FF] text-lg font-semibold">
                ${product.price}
              </span>
              <span className="text-[#9098B1] mx-3 line-through ">
                ${product.oldPrice}
              </span>
              <span className="text-[#FB7181] text-sm">
                {product.discount}% Off
              </span>
            </div>
            <div className="flex-1">
              <ul className="w-60 text-sm text-[#262626] mt-4">
                <li className="flex justify-between mt-3">
                  <span>Availability:</span>
                  <span>In stock</span>
                </li>
                <li className="flex justify-between mt-3">
                  <span>Category:</span>
                  <span>Accessories</span>
                </li>
                <li className="mt-3">Free shipping</li>
              </ul>
            </div>

            <SizeProduct
              product={product}
              onChange={(e) => setsize(e.target.value)}
            />

            <div className="flex justify-between mt-6 ">
              <CounterProduct count={count} setCount={setCount} />
              <AddToCart cartItems={order} />
              <FavoriteProduct />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <h3 className="text-[#C1C8CE] ">BEST SELLER</h3>
        <AdSlider />
      </div>
    </div>
  );
}

export default DetailsProduct;

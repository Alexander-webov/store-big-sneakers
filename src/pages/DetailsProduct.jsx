import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RatingProduct from "../components/RatingProduct";
import Thumbnails from "../components/Thumbnails";
import { useEffect } from "react";
import { getProductDataAsync } from "../features/products/productsSlice";
import CounterProduct from "../components/CounterProduct";
import AddToCart from "../components/AddToCart";
import FavoriteProduct from "../components/FavoriteProduct";
import SizeProduct from "../components/SizeProduct";

function DetailsProduct() {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const products = useSelector((store) => store.product.products);
  const product = products.find((el) => el.id === +productId);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getProductDataAsync());
    }
  }, [dispatch, products.length]);
  if (!product) {
    return (
      <div className="text-center mt-20 text-xl text-gray-500">
        Loading product details...
      </div>
    );
  }

  return (
    <div className="flex justify-between">
      <div>
        <div className="flex ">
          <div className="max-w-sm">
            <Thumbnails thumbsGallery={product?.thumbsGallery} />
          </div>
          <div className="ml-6 w-96">
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
            <div>
              <ul className="w-60 text-sm text-[#262626] mt-4 border-solid pb-5 border-[#F6F7F8] border-b-2">
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
            <div className="flex mt-5">{product.description}</div>

            <SizeProduct product={product} />
            <div className="flex">
              <CounterProduct />
              <AddToCart />
              <FavoriteProduct />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <h3>BEST SELLER</h3>
        <div>slider</div>
      </div>
    </div>
  );
}

export default DetailsProduct;

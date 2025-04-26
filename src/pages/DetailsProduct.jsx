import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RatingProduct from "../components/RatingProduct";
import Thumbnails from "../components/Thumbnails";

function DetailsProduct() {
  const { productId } = useParams();
  const products = useSelector((store) => store.product.products);
  const product = products.find((el) => el.id === +productId);
  console.log(product.thumbsGallery);

  return (
    <div className="flex justify-between">
      <div>
        <div className="flex ">
          <div className="max-w-sm">
            <Thumbnails thumbsGallery={product.thumbsGallery} />
          </div>
          <div className="ml-5">
            <h4>{product.title}</h4>
            <div>
              <RatingProduct />
              <span>0 reviews</span>
            </div>
            <div>
              <span className="text-[#4440FF] text-lg font-medium">
                ${product.price}
              </span>
              <span className="text-[#9098B1] mx-2 line-through">
                ${product.oldPrice}
              </span>
              <span className="text-[#FB7181]">{product.discount}% Off</span>
            </div>
            <div>
              {" "}
              <ul>
                <li>
                  <span>Availability:</span>
                  <span>In stock</span>
                </li>
                <li>
                  <span>Category:</span>
                  <span>Accessories</span>
                </li>
                <li>Free shipping</li>
              </ul>
            </div>
            <div>
              Select Color:
              <ul>
                <li>0</li>
                <li>0</li>
                <li>0</li>
                <li>0</li>
              </ul>
            </div>
            <div>
              <span>Size</span>
              <select>
                {/* use  array product.sizes */}
                <option value="xs">xs</option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="xl">XL</option>
                <option value="XXl">XXL</option>
              </select>
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="">
        <h3>BEST SELLER</h3>
        <div>slider</div>
      </div>
    </div>
  );
}

export default DetailsProduct;

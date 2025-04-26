import { Link } from "react-router-dom";
import RatingProduct from "../../components/RatingProduct";

function Product({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="border-2 border-gray-100 border-solid px-3 pt-3 pb-8 rounded-md mt-4 cursor-pointer">
        <img src={product.image} alt="" />
        <div className="text-[#223263] text-lg">{product.title}</div>
        <div>
          <RatingProduct rating={4} />
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
      </div>
    </Link>
  );
}

export default Product;

import RatingProduct from "./RatingProduct";
import comingSoon from "../assets/images/comingSoon.png";

function FeaturedProducts() {
  return (
    <div className="font-semibold text-4xl  mt-44 mb-44">
      <h2 className="text-center">FEATURED PRODUCTS</h2>
      <div className="flex justify-around mt-14">
        <div className="flex">
          <div>
            <img src={comingSoon} alt="" />
          </div>
          <div className="ml-5">
            <h4 className="text-xl max-w-40">Blue Swade Nike Sneakers</h4>
            <div className="mt-4">
              <RatingProduct rating={5} size={50} />
            </div>
            <div className="text-xl font-medium text-[#FF4858] mt-4">$499</div>
          </div>
        </div>

        <div className="flex">
          <div>
            <img src={comingSoon} alt="" />
          </div>
          <div className="ml-5">
            <h4 className="text-xl max-w-40">Blue Swade Nike Sneakers</h4>
            <div className="mt-4">
              <RatingProduct rating={5} size={50} />
            </div>
            <div className="text-xl font-medium text-[#FF4858] mt-4">$499</div>
          </div>
        </div>

        <div className="flex">
          <div>
            <img src={comingSoon} alt="" />
          </div>
          <div className="ml-5">
            <h4 className="text-xl max-w-40">Blue Swade Nike Sneakers</h4>
            <div className="mt-4">
              <RatingProduct rating={5} size={50} />
            </div>
            <div className="text-xl font-medium text-[#FF4858] mt-4">$499</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts;

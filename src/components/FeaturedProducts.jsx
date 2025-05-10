import RatingProduct from "./RatingProduct";
import comingSoon from "../assets/images/comingSoon.png";

function FeaturedProducts() {
  return (
    <div className="font-semibold text-4xl  md:mt-44 mt-10 mb-44">
      <h2 className="text-center">FEATURED PRODUCTS</h2>
      <div className="flex mb:justify-center justify-around mt-14 flex-wrap">
        <div className="flex mb-1  xl:flex-row flex-col ">
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

        <div className="flex  xl:flex-row flex-col mb-1">
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

        <div className="flex  xl:flex-row flex-col mb-1">
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

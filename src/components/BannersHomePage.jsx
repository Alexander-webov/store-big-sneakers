import bigBanner from "../assets/images/bigBanner.jpg";
import smallBanner1 from "../assets/images/small-banner-1.png";
import smallBanner2 from "../assets/images/small-banner-2.png";
import smallBanner3 from "../assets/images/small-banner-3.png";

function BannersHomePage() {
  return (
    <div className="relative">
      <div className="flex justify-center">
        <img src={bigBanner} alt="sneakers" />
      </div>
      <div className="flex justify-center absolute left-0 right-0 bottom-[-250px]">
        <img src={smallBanner1} alt="" />
        <img src={smallBanner2} alt="" />
        <img src={smallBanner3} alt="" />
      </div>
    </div>
  );
}

export default BannersHomePage;

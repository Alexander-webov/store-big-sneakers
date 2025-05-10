import smallBanner1 from "../assets/images/small-banner-1.png";
import smallBanner2 from "../assets/images/small-banner-2.png";
import smallBanner3 from "../assets/images/small-banner-3.png";

function SmalBanners() {
  return (
    <div className="lg:flex justify-center absolute left-0 right-0 lg:bottom-[-250px] bottom-0 none">
      <img
        className="xl:max-h-96 lg:max-h-80  max-h-0"
        src={smallBanner1}
        alt=""
      />

      <img
        className="xl:max-h-96 lg:max-h-80  max-h-0"
        src={smallBanner2}
        alt=""
      />
      <img
        className="xl:max-h-96 lg:max-h-80  max-h-0"
        src={smallBanner3}
        alt=""
      />
    </div>
  );
}

export default SmalBanners;

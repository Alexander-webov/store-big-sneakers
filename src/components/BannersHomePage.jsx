import BigBanner from "./BigBanner";
import SmalBanners from "./SmalBanners";

function BannersHomePage() {
  return (
    <div className="relative">
      <BigBanner />
      <SmalBanners />
    </div>
  );
}

export default BannersHomePage;

import BannersHomePage from "../components/BannersHomePage";
import AdBanner from "../components/AdBanner";
import BestSeller from "../components/BestSeller";
import InfoBlock from "../components/InfoBlock";
import FeaturedProducts from "../components/FeaturedProducts";

function Home() {
  return (
    <div>
      <BannersHomePage />
      <BestSeller />
      <AdBanner />
      <InfoBlock />
      <FeaturedProducts />
    </div>
  );
}

export default Home;

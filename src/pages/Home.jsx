import Header from "../components/Header";
import BannersHomePage from "../components/BannersHomePage";
import Products from "../components/Products";
import AdBanner from "../components/AdBanner";
import BestSeller from "../components/BestSeller";
import InfoBlock from "../components/InfoBlock";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="max-w-[1500px] m-auto">
      <Header />
      <BannersHomePage />
      <BestSeller />
      <AdBanner />
      <InfoBlock />
      <FeaturedProducts />
      <Footer />
    </div>
  );
}

export default Home;

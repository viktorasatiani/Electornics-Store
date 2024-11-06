import ComputersShop from "../ui/ComputersShop";
import FeaturesBox from "../ui/FeaturesBox";
import HeroSection from "../ui/HeroSection";
import MobileHeadPhones from "../ui/MobileHeadPhones";
import ShopByCategory from "../ui/ShopByCategory";

function Home() {
  return (
    <div className="grid grid-rows-[auto,auto,5fr,auto] bg-neutral-300">
      <HeroSection />
      <MobileHeadPhones />
      <FeaturesBox />
      <ShopByCategory />
      <ComputersShop />
    </div>
  );
}

export default Home;

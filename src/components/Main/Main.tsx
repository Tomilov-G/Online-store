import Banner from "./Banner/Banner";
import Categories from "./Categories/Categories";
import GadgetBanners from "./GadgetBanners/GadgetBanners";
import SaleBanner from "./SaleBanner/SaleBanner";
import SmallBanners from "./SmallBanners/SmallBanners";

const Main = () => {
  return (
    <main>
      <Banner />
      <SmallBanners />
      <Categories />
      <GadgetBanners />
      <SaleBanner />
    </main>
  );
};
export default Main;

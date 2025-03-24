import Banner from "./Banner/Banner";
import Recommendations from "./Recommendations/Recommendations";
import Categories from "./Categories/Categories";
import SmallBanners from "./SmallBanners/SmallBanners";

const Main = () => {
  return (
    <main>
      <Banner />
      <SmallBanners />
      <Recommendations />
      <Categories />
    </main>
  );
};
export default Main;

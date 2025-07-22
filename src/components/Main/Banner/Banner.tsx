import classes from "./Banner.module.scss";

import ShopNowButton from "../../../ui/Buttons/ShopNowButton/ShopNowButton";
import BannerItem from "./BannerItem/BannerItem";

import BannerIphone from "../../../assets/images/MainImage/BannerIphone.png";

const Banner = () => {
  return (
    <section className={classes.bigBanner}>
      <div className={classes.bigBannerInner}>
        <BannerItem
          title="Iphone 16"
          titleSpan="Pro"
          slogan="Pro.Beyond."
          subtitle="Создан чтобы изменить все к лучшему."
          image={BannerIphone}
          alt="Телефон"
        >
          <ShopNowButton  />
        </BannerItem>
      </div>
    </section>
  );
};
export default Banner;

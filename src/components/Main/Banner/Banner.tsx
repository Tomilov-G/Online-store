import classes from "./Banner.module.scss";

import ShopNowButton from "../../../ui/Buttons/ShopNowButton/ShopNowButton";

import BannerIphone from "../../../assets/images/MainImage/BannerIphone.png";

const Banner = () => {
  return (
    <section className={classes.bigBanner}>
      <div className={classes.bigBannerInner}>
        <div className={classes.textContent}>
          <h4 className={classes.slogan}>Pro.Beyond.</h4>
          <h1 className={classes.title}>
            IPhone 16
            <span className={classes.titleSpan}> Pro</span>
          </h1>
          <h4 className={classes.subtitle}>
            Создан, чтобы изменить все к лучшему.
          </h4>
          <ShopNowButton />
        </div>
        <div className={classes.imageWrapper}>
          <img
            src={BannerIphone}
            alt="IPhone"
            className={classes.iphoneImage}
          />
        </div>
      </div>
    </section>
  );
};
export default Banner;

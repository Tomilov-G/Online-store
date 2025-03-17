import classes from "./SmallBanners.module.scss";

import SmallItemBanner from "./SmallItemBanner/SmallItemBanner";
import ShopNowButton from "../../../ui/Buttons/ShopNowButton/ShopNowButton";

import bannersData from "../SmallBanners/SmallBannersData";

const SmallBanners = () => {
  return (
    <section className={classes.smallBanners}>
      <div className={classes.leftSideContent}>
        {bannersData
          .filter((banner) => banner.id === 1)
          .map((banner) => (
            <SmallItemBanner key={banner.id} {...banner} />
          ))}
        <div className={classes.appleAccessoriesBanner}>
          {bannersData
            .filter((banner) => banner.id === 2 || banner.id === 3)
            .map((banner) => (
              <SmallItemBanner key={banner.id} {...banner} />
            ))}
        </div>
      </div>
      <div className={classes.rightSideContent}>
        {bannersData
          .filter((banner) => banner.id === 4)
          .map((banner) => (
            <SmallItemBanner key={banner.id} {...banner}>
              <ShopNowButton className={classes.shopNowButton} />
            </SmallItemBanner>
          ))}
      </div>
    </section>
  );
};
export default SmallBanners;

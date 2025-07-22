import { useMemo } from "react";

import classes from "./SmallBanners.module.scss";

import SmallItemBanner from "./SmallItemBanner/SmallItemBanner";
import ShopNowButton from "../../../ui/Buttons/ShopNowButton/ShopNowButton";

import bannersData from "../SmallBanners/SmallBannersData";

const SmallBanners = () => {
  const firstBanner = useMemo(() => {
    return bannersData
      .filter((banner) => banner.id === 1)
      .map((banner) => <SmallItemBanner key={banner.id} {...banner} />);
  }, []);

  const secondAndThirdBanners = useMemo(() => {
    return bannersData
      .filter((banner) => banner.id === 2 || banner.id === 3)
      .map((banner) => <SmallItemBanner key={banner.id} {...banner} />);
  }, []);

  const fourthBanner = useMemo(() => {
    return bannersData
      .filter((banner) => banner.id === 4)
      .map((banner) => (
        <SmallItemBanner key={banner.id} {...banner}>
          <ShopNowButton className={classes.shopNowButton} />
        </SmallItemBanner>
      ));
  }, []);

  return (
    <section className={classes.smallBanners}>
      <div className={classes.leftSideContent}>
        {firstBanner}
        <div className={classes.appleAccessoriesBanner}>
          {secondAndThirdBanners}
        </div>
      </div>
      <div className={classes.rightSideContent}>{fourthBanner}</div>
    </section>
  );
};
export default SmallBanners;

import { useMemo } from "react";
import { useMediaQuery } from "react-responsive";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/pagination";

import classes from "./GadgetBanners.module.scss";

import SmallItemBanner from "../SmallBanners/SmallItemBanner/SmallItemBanner";
import GadgetBannersData from "./GadgetBannersData";
import ShopNowButton from "../../../ui/Buttons/ShopNowButton/ShopNowButton";
import SCREEN_SIZES from "../../../constants/screenSizes";

const GadgetBanners = () => {
  const firstGadgetBanner = useMemo(() => {
    return GadgetBannersData.filter((item) => item.id === 1).map((banner) => (
      <SmallItemBanner key={banner.id} {...banner}>
        <ShopNowButton className={classes.button} />
      </SmallItemBanner>
    ));
  }, []);
  const secondGadgetBanner = useMemo(() => {
    return GadgetBannersData.filter((item) => item.id === 2).map((banner) => (
      <SmallItemBanner key={banner.id} {...banner}>
        <ShopNowButton className={classes.button} />
      </SmallItemBanner>
    ));
  }, []);
  const thirdGadgetBanner = useMemo(() => {
    return GadgetBannersData.filter((item) => item.id === 3).map((banner) => (
      <SmallItemBanner key={banner.id} {...banner}>
        <ShopNowButton className={classes.button} />
      </SmallItemBanner>
    ));
  }, []);
  const fourthGadgetBanner = useMemo(() => {
    return GadgetBannersData.filter((item) => item.id === 4).map((banner) => (
      <SmallItemBanner key={banner.id} {...banner}>
        <ShopNowButton className={classes.button} />
      </SmallItemBanner>
    ));
  }, []);

  const swiperGadgetBanner = useMemo(() => {
    return GadgetBannersData.map((banner) => (
      <SwiperSlide key={banner.id}>
        <SmallItemBanner {...banner}>
          <ShopNowButton className={classes.button} />
        </SmallItemBanner>
      </SwiperSlide>
    ));
  }, []);

  const isMobile = useMediaQuery({ maxWidth: SCREEN_SIZES.MOBILE });

  if (isMobile) {
    return (
      <section className={classes.gadgetBanners}>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          className={classes.swiper}
        >
          {swiperGadgetBanner}
        </Swiper>
      </section>
    );
  }

  return (
    <section className={classes.gadgetBanners}>
      <div className={classes.gadgetBannersInner}>
        {firstGadgetBanner}
        {secondGadgetBanner}
        {thirdGadgetBanner}
        {fourthGadgetBanner}
      </div>
    </section>
  );
};

export default GadgetBanners;

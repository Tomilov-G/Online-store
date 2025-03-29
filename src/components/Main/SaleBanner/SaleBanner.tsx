import saleImage1 from "../../../assets/images/MainImage/SaleImage/SaleImage1.png";
import saleImage2 from "../../../assets/images/MainImage/SaleImage/SaleImage2.png";
import saleImage3 from "../../../assets/images/MainImage/SaleImage/SaleImage3.png";
import saleImage4 from "../../../assets/images/MainImage/SaleImage/SaleImage4.png";
import saleImage5 from "../../../assets/images/MainImage/SaleImage/SaleImage5.png";
import ShopNowButton from "../../../ui/Buttons/ShopNowButton/ShopNowButton";
import classes from "./SaleBanner.module.scss";
import SaleItemBanner from "./SaleItemBanner/SaleItemBanner";
const SaleBanner = () => {
  return (
    <section className={classes.saleBanner}>
      <div className={classes.saleBannerInner}>
        <div className={classes.leftSideImage}>
          <img src={saleImage2} alt="" className={classes.imageMacBook}/>
          <img src={saleImage1} alt="" className={classes.imageTablet}/>
          <img src={saleImage3} alt="" className={classes.imageSmartphone}/>
        </div>
        <SaleItemBanner 
          title="Большая"
          spanTitle="Распродажа"
          subtitle="Скидки до 80 % на Apple, Samsung и не только"
          textContentClassName={classes.textContent}
        >
          <ShopNowButton />
        </SaleItemBanner>
        <div className={classes.rightSideImage}>
          <img src={saleImage4} alt="" className={classes.imagePhone}/>
          <img src={saleImage5} alt="" className={classes.imageWatch}/>
        </div>
      </div>
    </section>
  );
};

export default SaleBanner;

import { FC } from "react";

import classes from "./BannerItem.module.scss";

interface BannerItemProps {
  title: string;
  titleSpan: string;
  subtitle: string;
  slogan: string;
  image: string;
  alt: string;
  children: React.ReactNode;
}

const BannerItem: FC<BannerItemProps> = ({
  title,
  slogan,
  titleSpan,
  subtitle,
  image,
  alt,
  children,
}) => {
  return (
    <>
      <div className={classes.textContent}>
        <h4 className={classes.slogan}>{slogan}</h4>
        <h1 className={classes.title}>
          {title}
          <span className={classes.titleSpan}>{titleSpan}</span>
        </h1>
        <h4 className={classes.subtitle}>{subtitle}</h4>
        {children}
      </div>
      <div className={classes.imageWrapper}>
        <img src={image} alt={alt} className={classes.iphoneImage} />
      </div>
    </>
  );
};
export default BannerItem;

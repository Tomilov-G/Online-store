import { FC } from "react";

import classes from "./SmallItemBanner.module.scss";

interface SmallItemBannerProps {
  className?: string;
  image?: string;
  imageMobile?: string;
  imageClassName?: string;
  alt?: string;
  textContentClassName?: string;
  title: string;
  appleWord?: string;
  spanTitle?: string;
  titleClassName?: string;
  description?: string;
  descriptionClassName?: string;
  children?: React.ReactNode;
}

const SmallItemBanner: FC<SmallItemBannerProps> = ({
  className,
  image,
  imageMobile,
  imageClassName,
  alt,
  textContentClassName,
  title,
  appleWord,
  spanTitle,
  titleClassName,
  description,
  descriptionClassName,
  children,
}) => {
  return (
    <div className={`${classes.smallItemBanner} ${className || ""}`}>
      <picture>
        <source media="(max-width: 635px)" srcSet={imageMobile} />
        <img
          src={image}
          alt={alt}
          className={`${classes.image} ${imageClassName || ""}`}
        />
      </picture>
      <div className={`${classes.textContent} ${textContentClassName || ""}`}>
        <h2 className={`${classes.title} ${titleClassName || ""}`}>
          {appleWord}
          <br className={classes.indent} />
          {title} <span className={classes.spanTitle}>{spanTitle}</span>
        </h2>
        <p className={`${classes.description} ${descriptionClassName || ""}`}>{description}</p>
        {children}
      </div>
    </div>
  );
};

export default SmallItemBanner;

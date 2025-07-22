import { FC, ReactNode } from "react";
import classes from "./SaleItemBanner.module.scss";

interface SaleItemBanner {
  title: string;
  spanTitle: string;
  textContentClassName: string;
  subtitle: string;
  children: ReactNode;
}
const SaleItemBanner: FC<SaleItemBanner> = ({
  title,
  spanTitle,
  subtitle,
  children,
  textContentClassName,
}) => {
  return (
    <div className={`${classes.textContent} ${textContentClassName || ""}`}>
      <h1 className={classes.title}>
        {title} <span className={classes.span}>{spanTitle}</span>
      </h1>
      <h3 className={classes.subtitle}>{subtitle}</h3>
      {children}
    </div>
  );
};

export default SaleItemBanner;

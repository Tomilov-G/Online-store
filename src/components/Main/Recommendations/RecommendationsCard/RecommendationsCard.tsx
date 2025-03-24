import { FC } from "react";
import classes from "./RecommendationsCard.module.scss";

interface RecommendationsCardProps {
  image: string;
  alt: string;
  title: string;
  price: number;
  currency: string;
  children?: React.ReactNode;
}
const RecommendationsCard: FC<RecommendationsCardProps> = ({
  image,
  alt,
  title,
  price,
  currency,
  children,
}) => {
  return (
    <div className={classes.card}>
      <img src={image} alt={alt} />
      <h4 className={classes.title}>{title}</h4>
      <h2>{price} {currency}</h2>
      {children}
    </div>
  );
};

export default RecommendationsCard;

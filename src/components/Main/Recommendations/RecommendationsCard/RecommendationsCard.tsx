import { FC } from "react";
import { Link } from "react-router-dom";
import classes from "./RecommendationsCard.module.scss";
import FavoritesItem from "./FavoritesItem/FavoritesItem";

const maxTitleLength = 40;

interface RecommendationsCardProps {
  id: string;
  image: string;
  alt: string;
  model: string;
  brand: string;
  price: number;
  currency: string;
  cardClassName?: string;
  children?: React.ReactNode;
}
const RecommendationsCard: FC<RecommendationsCardProps> = ({
  id,
  image,
  alt,
  model,
  brand,
  price,
  currency,
  cardClassName,
  children,
}) => {
  const title = `${model} ${brand}`;
  const trimmedTitle =
    title.length > maxTitleLength
      ? title.split(" ").reduce((acc, word) => {
          if ((acc + word).length <= maxTitleLength) return acc + word + " ";
          return acc;
        }, "")
      : title;

  const formattedPrice = new Intl.NumberFormat("ru-RU").format(price);

  return (
    <div className={`${classes.card} ${cardClassName || ""}`}>
      <FavoritesItem id={id} />
      <div className={classes.cardContent}>
        <Link to="/description">
          <img src={image} alt={alt} className={classes.image} />
        </Link>
        <p className={classes.title}>{trimmedTitle}</p>
        <h2 className={classes.price}>
          {formattedPrice} {currency}
        </h2>
        {children}
      </div>
    </div>
  );
};

export default RecommendationsCard;

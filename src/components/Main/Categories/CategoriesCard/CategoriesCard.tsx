import { FC } from "react";
import { Link } from "react-router-dom";

import classes from "./CategoriesCard.module.scss";

interface CategoriesCardProps {
  title: string;
  image: string;
  alt: string;
}
const CategoriesCard: FC<CategoriesCardProps> = ({ title, image, alt }) => {
  return (
    <Link to="/catalog" className={classes.cardLink}>
      <div className={classes.card}>
        <img src={image} alt={alt} className={classes.cardIcon} />
        <h3 className={classes.title}>{title}</h3>
      </div>
    </Link>
  );
};

export default CategoriesCard;

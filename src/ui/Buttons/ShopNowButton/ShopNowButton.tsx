import { Link } from "react-router-dom";
import classes from "./ShopNowButton.module.scss"
import { FC } from "react";

interface ShopNowButtonProps {
    className?: string,
}

const ShopNowButton:FC<ShopNowButtonProps> = ({ className }) => {
  return (
    <Link to="/catalog">
      <button type="button" className={`${classes.shopNowButton} ${className || ""}`}>
        <p className={classes.buttonText}>За покупками</p>
      </button>
    </Link>
  );
};
export default ShopNowButton;

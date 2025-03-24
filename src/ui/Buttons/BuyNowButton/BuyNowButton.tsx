import classes from "./BuyNowButton.module.scss";

const BuyNowButton = () => {
  return (
    <button type="button" className={classes.buyNowButton}>
      <p className={classes.buttonText}>В корзину</p>
    </button>
  );
};

export default BuyNowButton;

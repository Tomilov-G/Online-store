import { FC } from "react";

import classes from "./BurgerIcon.module.scss";

interface BurgerIconProps {
  openBurger: () => void
}

const BurgerIcon:FC<BurgerIconProps> = ({ openBurger }) => {
  return (
    <div className={classes.burgerIcon} onClick={openBurger}>
      <span className={classes.burgerLine}></span>
      <span className={classes.burgerLine}></span>
      <span className={classes.burgerLine}></span>
    </div>
  );
};

export default BurgerIcon;

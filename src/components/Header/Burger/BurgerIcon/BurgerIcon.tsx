import { FC } from "react";

import classes from "./BurgerIcon.module.scss";

interface BurgerIconProps {
  openBurger: () => void
}

const BurgerIcon:FC<BurgerIconProps> = ({ openBurger }) => {
  return (
    <div className={classes.burger__icon} onClick={openBurger}>
      <span className={classes.burger__line}></span>
      <span className={classes.burger__line}></span>
      <span className={classes.burger__line}></span>
    </div>
  );
};

export default BurgerIcon;

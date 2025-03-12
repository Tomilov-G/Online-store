import { FC } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import classes from "./BurgerContent.module.scss";

import Input from "../../../../ui/Input/Input";
import Logo from "../../Logo/Logo";
import Navigation from "../../Navigation/Navigation";

interface BurgerContentProps {
  closeBurger: () => void;
  isOpen: boolean;
}

const BurgerContent:FC<BurgerContentProps> = ({ closeBurger, isOpen }) => {
  return (
    <div className={`${classes.burger__content} ${isOpen ? classes.open : ""}`}>
      <div className={classes.burger__icons}>
        <Logo />
        <FontAwesomeIcon
          icon={faXmark}
          onClick={closeBurger}
          className={classes.closeIcon}
        />
      </div>
      <div className={classes.burger__wrapper}>
        <Input className={classes.burger__input} />
      </div>
        <Navigation className={classes.navigation}/>
    </div>
  );
};

export default BurgerContent;

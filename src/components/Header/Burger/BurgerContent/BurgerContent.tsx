import { FC } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import classes from "./BurgerContent.module.scss";

import Input from "../../../../ui/Input/Input";
import Logo from "../../Logo/Logo";
import Navigation from "../../Navigation/Navigation";
import logoImage from "../../../../assets/images/HeaderImage/Logo.svg"

interface BurgerContentProps {
  closeBurger: () => void;
  isOpen: boolean;
}

const BurgerContent:FC<BurgerContentProps> = ({ closeBurger, isOpen }) => {
  return (
    <div className={`${classes.burgerContent} ${isOpen ? classes.open : ""}`}>
      <div className={classes.burgerIcons}>
        <Logo image={logoImage} onClick={closeBurger}/>
        <FontAwesomeIcon
          icon={faXmark}
          onClick={closeBurger}
          className={classes.closeIcon}
        />
      </div>
      <div className={classes.burgerWrapper}>
        <Input className={classes.burgerInput} />
      </div>
        <Navigation onClick={closeBurger} />
    </div>
  );
};

export default BurgerContent;

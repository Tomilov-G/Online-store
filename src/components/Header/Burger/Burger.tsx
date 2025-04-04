import { useEffect, useState } from "react";

import BurgerIcon from "./BurgerIcon/BurgerIcon";
import BurgerContent from "./BurgerContent/BurgerContent";
import SCREEN_SIZES from "../../../constants/screenSizes";


const Burger = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleBurger = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > SCREEN_SIZES.MOBILE && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <>
      <BurgerIcon openBurger={toggleBurger} />
      <BurgerContent closeBurger={toggleBurger} isOpen={isOpen} />
    </>
  );
};

export default Burger;

import classes from "./Header.module.scss";

import Input from "../../ui/Input/Input";
import Burger from "./Burger/Burger";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import IconsBlock from "./IconsBlock/IconsBlock";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.container__inner}>
          <Logo />
          <Input className={classes.header__input} />
          <Navigation className={classes.header__navigation}/>
          <IconsBlock />
          <Burger />
        </div>
      </div>
    </header>
  );
};
export default Header;

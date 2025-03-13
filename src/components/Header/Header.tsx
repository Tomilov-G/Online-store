import classes from "./Header.module.scss";

import Input from "../../ui/Input/Input";
import Burger from "./Burger/Burger";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import IconsBlock from "./IconsBlock/IconsBlock";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.headerInner}>
        <Logo />
        <Input className={classes.headerInput} />
        <Navigation className={classes.headerNavigation} />
        <IconsBlock />
        <Burger />
      </div>
    </header>
  );
};
export default Header;

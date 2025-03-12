import classes from "./Logo.module.scss";

import logo from "../../../assets/images/Logo.svg";


const Logo = () => {
  return <img src={logo} alt="Логотип" className={classes.logo} />;
};
export default Logo;

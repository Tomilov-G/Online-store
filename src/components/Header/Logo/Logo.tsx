import classes from "./Logo.module.scss";

import { Link } from "react-router-dom";

import logo from "../../../assets/images/HeaderImage/Logo.svg";
import { FC } from "react";

interface LogoProps {
  onClick?: () => void;
}

const Logo:FC<LogoProps> = ({ onClick }) => {
  return (
    <Link to="/" onClick={onClick}>
      <img src={logo} alt="Логотип" className={classes.logo} />
    </Link>
  );
};
export default Logo;

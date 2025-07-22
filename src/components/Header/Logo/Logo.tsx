import classes from "./Logo.module.scss";

import { Link } from "react-router-dom";

import { FC } from "react";

interface LogoProps {
  onClick?: () => void;
  image: string;
  imageClassName?: string;
}

const Logo: FC<LogoProps> = ({ onClick, image, imageClassName }) => {
  return (
    <Link to="/" onClick={onClick}>
      <img
        src={image}
        alt="Логотип"
        className={`${classes.logo}${imageClassName || ""}`}
      />
    </Link>
  );
};
export default Logo;

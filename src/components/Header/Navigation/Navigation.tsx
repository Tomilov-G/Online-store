import { FC } from "react";

import classes from "./Navigation.module.scss";
import { NavLink } from "react-router-dom";

interface NavigationProps {
  className?: string;
  onClick?: () => void;
}

const Navigation: FC<NavigationProps> = ({ className, onClick }) => {
  return (
    <nav
      className={`${classes.navigation} ${className || ""}`}
      role="navigation"
    >
      <ul className={classes.navigationList}>
        <li className={classes.listItem}>
          <NavLink
            to="/"
            onClick={onClick}
            className={({ isActive }) =>
              isActive ? `${classes.itemLink} ${classes.activeLink}`: classes.itemLink}
            >
            Главная
          </NavLink>
        </li>
        <li className={classes.listItem}>
          <NavLink 
            to="/catalog"
            onClick={onClick}             
            className={({ isActive }) =>
              isActive ? `${classes.itemLink} ${classes.activeLink}`: classes.itemLink}
            >
            Каталог
          </NavLink>
        </li>
        <li className={classes.listItem}>
          <NavLink  
            to="/contacts"
            onClick={onClick}             
            className={({ isActive }) =>
              isActive ? `${classes.itemLink} ${classes.activeLink}`: classes.itemLink}
            >
            Контакты
          </NavLink>
        </li>
        <li className={classes.listItem}>
          <NavLink  
            to="/about"   
            onClick={onClick}          
            className={({ isActive }) =>
              isActive ? `${classes.itemLink} ${classes.activeLink}`: classes.itemLink}
            >
            О нас
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

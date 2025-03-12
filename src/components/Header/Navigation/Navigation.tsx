import { FC } from 'react';

import classes from "./Navigation.module.scss";

interface NavigationProps {
  className: string;
}

const Navigation:FC<NavigationProps> = ({ className }) => {
  return (
    <nav className={`${classes.navigation} ${className || ''}`} role="navigation">
      <ul className={classes.navigation__list}>
        <li className={classes.list__item}>
          <a href="/" className={classes.item__link}>
            Главная
          </a>
        </li>
        <li className={classes.list__item}>
          <a href="/" className={classes.item__link}>
            Каталог
          </a>
        </li>
        <li className={classes.list__item}>
          <a href="/" className={classes.item__link}>
            Контакты
          </a>
        </li>
        <li className={classes.list__item}>
          <a href="/" className={classes.item__link}>
            О нас
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;

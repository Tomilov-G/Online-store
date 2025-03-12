import { FC } from 'react';

import classes from './Input.module.scss'

interface InputProps {
  className: string,
}
const Input:FC< InputProps> = ({ className }) => {
  return (
    <form action="" className={`${classes.form__wrapper} ${className || ''}`}>
      <input type="text" placeholder="Поиск" className={classes.search__bar} />
    </form>
  );
};
export default Input
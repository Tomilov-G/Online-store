import { FC } from 'react';

import classes from './Input.module.scss'

interface InputProps {
  className: string,
}
const Input:FC< InputProps> = ({ className }) => {
  return (
    <form action="" className={`${classes.formWrapper} ${className || ''}`}>
      <input type="text" placeholder="Поиск" className={classes.searchBar} />
    </form>
  );
};
export default Input
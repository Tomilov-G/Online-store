import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart,faCartShopping,faUser } from "@fortawesome/free-solid-svg-icons";

import classes from './IconsBlock.module.scss'

const IconsBlock = () => {
  return (
    <div className={classes.icons}>
      <a href="/" className={classes.icons__link}>
        <FontAwesomeIcon
          icon={faHeart}
          className={`${classes.icon} ${classes.favorites}`}
        />
      </a>
      <a href="/" className={classes.icons__link}>
        <FontAwesomeIcon
          icon={faCartShopping}
          className={`${classes.icon} ${classes.cart}`}
        />
      </a>
      <a href="/" className={classes.icons__link}>
        <FontAwesomeIcon
          icon={faUser}
          className={`${classes.icon} ${classes.user}`}
        />
      </a>
    </div>
  );
};

export default IconsBlock

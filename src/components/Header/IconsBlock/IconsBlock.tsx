import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser, faHeart} from "@fortawesome/free-solid-svg-icons";

import classes from "./IconsBlock.module.scss";

const IconsBlock = () => {
  return (
    <div className={classes.icons}>
      <Link to="/favorites" className={classes.iconsLink}>
        <FontAwesomeIcon
          icon={faHeart}
          className={`${classes.icon} ${classes.favorites}`}
        />
      </Link>
      <Link to="/cart" className={classes.iconsLink}>
        <FontAwesomeIcon
          icon={faCartShopping}
          className={`${classes.icon} ${classes.cart}`}
        />
      </Link>
      <Link to="/profile" className={classes.iconsLink}>
        <FontAwesomeIcon
          icon={faUser}
          className={`${classes.icon} ${classes.user}`}
        />
      </Link>
    </div>
  );
};

export default IconsBlock;

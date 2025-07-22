import { FC } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import classes from "./SocialMediaItem.module.scss";

export interface SocialMediaProps {
  to?: string;
  icon: IconProp;
}

const SocialMediaItem: FC<SocialMediaProps> = ({ to, icon }) => {
  return (
    <Link to={to || "/"} className={classes.iconLink}>
      <FontAwesomeIcon icon={icon} className={classes.icon} />
    </Link>
  );
};
export default SocialMediaItem;

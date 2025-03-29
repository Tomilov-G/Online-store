import { FC } from "react";
import { Link } from "react-router-dom";
import { NavigationItem } from "../../../../../types/Navigation";
import classes from "./FooterNavigationListItem.module.scss";

const FooterNavigationListItem: FC<NavigationItem> = ({ listItemName, to }) => {
  return (
    <li className={classes.listItem}>
      <Link to={to || "/"} className={classes.link}>{listItemName}</Link>
    </li>
  );
};

export default FooterNavigationListItem;

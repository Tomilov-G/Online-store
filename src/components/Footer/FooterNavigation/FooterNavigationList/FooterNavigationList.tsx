import { FC } from "react";
import { NavigationList } from "../../../../types/Navigation";
import classes from "./FooterNavigationList.module.scss";
import FooterNavigationListItem from "./FooterNavigationListItem/FooterNavigationListItem";

interface FooterNavigationListProps {
  navigationList: NavigationList;
  title?: string;
}

const FooterNavigationList: FC<FooterNavigationListProps> = ({
  navigationList,
  title,
}) => {
  return (
    <ul className={classes.serviceList}>
      <h3 className={classes.title}>{title}</h3>
      {navigationList.items.map((item, index) => (
        <FooterNavigationListItem key={index} {...item} />
      ))}
    </ul>
  );
};
export default FooterNavigationList;

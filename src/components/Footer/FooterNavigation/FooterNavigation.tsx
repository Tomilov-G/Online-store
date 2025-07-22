import classes from "./FooterNavigation.module.scss";
import { FC } from "react";
import { NavigationList } from "../../../types/Navigation";
import FooterNavigationList from "./FooterNavigationList/FooterNavigationList";


const FooterNavigation:FC  = () => {
  const serviceListArr: NavigationList[] = [
    {
      title: "Сервисы",
      items: [
        { to: "/services", listItemName: "Кредит и оплата" },
        { to: "/services", listItemName: "Подарочные карты" },
        { to: "/services", listItemName: "Бонусная программа" },
        { to: "/services", listItemName: "Безналичный платеж" },
      ],
    },
  ];
  const assistanceListArr: NavigationList[] = [
    {
      title: "Помощь покупателю",
      items: [
        { to: "/assistent", listItemName: "Гарантия" },
        { to: "/assistent", listItemName: "Статус заказа" },
        { to: "/assistent", listItemName: "Обмен и возврат товара" },
        { to: "/assistent", listItemName: "Часто задаваемые вопросы" },
      ],
    },
  ];
  return (
    <>
      <div className={classes.servicesBlock}>
        {serviceListArr.map((navList, index) => (
          <FooterNavigationList key={index} navigationList={navList} title={navList.title}/>
        ))}
      </div>
      <div className={classes.assistanceBlock}>
        {assistanceListArr.map((navList, index) => (
          <FooterNavigationList key={index} navigationList={navList} title={navList.title} />
        ))}
      </div>
    </>
  );
};
export default FooterNavigation;

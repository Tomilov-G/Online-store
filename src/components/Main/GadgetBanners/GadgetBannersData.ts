import appleIpad from "../../../assets/images/MainImage/AppleIpad.png";
import samsungGalaxy from "../../../assets/images/MainImage/samsungGalaxy.svg";
import macBook from "../../../assets/images/MainImage/MacBookPro2.png";
import accessories from "../../../assets/images/MainImage/Accessories.png";
import classes from "./GadgetBanners.module.scss";

const GadgetBannersData = [
  {
    id: 1,
    className: classes.accessoriesBanner,
    image: accessories,
    imageClassName: classes.accessoriesImage,
    alt: "Аксессуары",
    textContentClassName: classes.textContent,
    title: "Популярные продукты",
    description:
      "Актуальные тренды, проверенное качество и высокие технологии, заслужившающие Вашего внимания.",
    descriptionClassName: classes.description,
    titleClassName: classes.title,
  },
  {
    id: 2,
    className: classes.appleIpadBanner,
    image: appleIpad,
    imageClassName: classes.appleIpadImage,
    alt: "Планшет",
    title: "Ipad Pro",
    titleClassName: classes.title,
    description:
      "iPad сочетает в себе великолепный 10,2-дюймовый дисплей Retina, невероятную производительность, многозадачность и простоту использования.",
    descriptionClassName: classes.description,
    textContentClassName: classes.textContent,
  },
  {
    id: 3,
    className: classes.samsungGalaxyBanner,
    image: samsungGalaxy,
    imageClassName: classes.samsungGalaxyImage,
    alt: "Телефон",
    title: "Samsung Galaxy",
    titleClassName: classes.title,
    description:
      "Samsung Galaxy сочетает в себе яркий и четкий дисплей, мощную производительность и интуитивно понятный интерфейс для комфортного использования в любых условиях.",
    descriptionClassName: classes.description,
    textContentClassName: classes.textContent,
  },
  {
    id: 4,
    image: macBook,
    imageClassName: classes.macBookImage,
    alt: "Ноутбук",
    className: classes.macBookBanner,
    textContentClassName: classes.textContent,
    title: "MacBook Pro",
    description:
      "MacBook Pro сочетает в себе мощный процессор и великолепный Retina дисплей, обеспечивая высочайшую производительность и стильный дизайн для профессионалов.",
    descriptionClassName: classes.description,
    titleClassName: classes.title,
  },
];

export default GadgetBannersData;

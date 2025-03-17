import classes from "../SmallBanners/SmallBanners.module.scss";

import mobilePlaystation from "../../../assets/images/MainImage/MobileImage/MobilePlaystation.svg";
import playstation from "../../../assets/images/MainImage/PlayStation.png";
import airPods from "../../../assets/images/MainImage/AirPodsProMax.png";
import appleVisionPro from "../../../assets/images/MainImage/AppleVisionPro.png";
import mobileAirPods from "../../../assets/images/MainImage/MobileImage/MobileAirPods.png";
import mobileAppleVisionPro from "../../../assets/images/MainImage/MobileImage/MobileAppleVisionPro.png";
import macBook from "../../../assets/images/MainImage/MacBook Pro.png";
import mobileMacBook from "../../../assets/images/MainImage/MobileImage/MobileMacBook.png";

const bannersData = [
  {
    id: 1,
    className: classes.playstationBanner,
    image: playstation,
    imageMobile: mobilePlaystation,
    imageClassName: classes.playstationImage,
    alt: "Игровая приставка",
    textContentClassName: classes.textContent,
    title: "Playstation",
    spanTitle: "5",
    titleClassName: classes.title,
    description:
      "Невероятно мощные CPUs, GPUs, а также SSD со встроенным I/O изменят ваше представление о Playstation.",
  },
  {
    id: 2,
    className: classes.airPodsBanner,
    image: airPods,
    imageMobile: mobileAirPods,
    imageClassName: classes.airpodsMaxImage,
    alt: "Наушники",
    appleWord: "Apple ",
    title: "AirPods",
    textContentClassName: classes.textContent,
    spanTitle: "Max",
    description: "Послушайте, это мощно.",
  },
  {
    id: 3,
    className: classes.appleVisionBanner,
    image: appleVisionPro,
    imageMobile: mobileAppleVisionPro,
    imageClassName: classes.appleVisionProImage,
    alt: "Очки виртуальной реальности",
    appleWord: "Apple ",
    title: "Vision",
    titleClassName: classes.appleVisionTitle,
    textContentClassName: classes.textContent,
    spanTitle: "Pro",
    description: "Захватывающий способ насладиться развлечениями.",
  },
  {
    id: 4,
    image: macBook,
    imageMobile: mobileMacBook,
    imageClassName: classes.macBookImage,
    className: classes.macBookBanner,
    textContentClassName: classes.textContent,
    title: "Macbook",
    spanTitle: "Air",
    titleClassName: classes.title,
    description: "В новом 15-дюймовом MacBook Air с просторным дисплеем Retina поместится еще больше того, что вы любите. ",
  },
];

export default bannersData;

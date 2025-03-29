import classes from "./SocialMedia.module.scss";
import {
  faVk,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import SocialMediaItem, {
  SocialMediaProps,
} from "./SocialMediaItem/SocialMediaItem";

const SocialMedia = () => {
  const arr: SocialMediaProps[] = [
    { to: "/", icon: faVk },
    { to: "/", icon: faTelegram },
    { to: "/", icon: faWhatsapp },
  ];
  return (
    <div className={classes.socialMediaBlock}>
      {arr.map((icon, index) => (
        <SocialMediaItem {...icon} key={index} />
      ))}
    </div>
  );
};
export default SocialMedia;

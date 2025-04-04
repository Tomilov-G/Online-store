import classes from "./Footer.module.scss";
import whiteLogo from "../../assets/images/FooterImage/WhiteLogo.svg";
import FooterNavigation from "./FooterNavigation/FooterNavigation";
import SocialMedia from "./SocialMedia/SocialMedia";
import Logo from "../Header/Logo/Logo";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerInner}>
        <Logo image={whiteLogo} imageClassName={classes.image}/>
        <FooterNavigation />
        <SocialMedia />
      </div>
    </footer>
  );
};
export default Footer;

import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguagesSwitcher/LanguageSwitcher";
import css from "./Navbar.module.css";

const Navbar = () => {
  const { t } = useTranslation();
    return (
      <nav className={css.nav}>
        <div className={css.logo}>Votre miel</div>
        <ul className={css.list}>
          <li><a href="#about-us">{t('navbar.about')}</a></li>
          <li><a href="#products">{t('navbar.products')}</a></li>
          <li><a href="#shop">{t('navbar.shop')}</a></li>
          <li><a href="#gallery">{t('navbar.gallery')}</a></li>
          <li><a href="#beauty">{t('navbar.beauty')}</a></li>
          <li><a href="#reviews">{t('navbar.reviews')}</a></li>
          <li><a href="#meet-us">{t('navbar.meet_us')}</a></li>
        </ul>
        <LanguageSwitcher />
      </nav>
    );
  };
  
  export default Navbar;
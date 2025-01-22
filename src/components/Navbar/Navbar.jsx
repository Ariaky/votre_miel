import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguagesSwitcher/LanguageSwitcher";
import css from "./Navbar.module.css";

const Navbar = () => {
  const { t } = useTranslation();
    return (
      <nav className={css.nav}>
        <div className={css.logo}>Votre miel</div>
        <ul className={css.list}>
          <li><a href="#about-us" className={css.list_item}>{t('navbar.about')}</a></li>
          <li><a href="#products" className={css.list_item}>{t('navbar.products')}</a></li>
          <li><a href="#shop" className={css.list_item}>{t('navbar.shop')}</a></li>
          <li><a href="#gallery" className={css.list_item}>{t('navbar.gallery')}</a></li>
          <li><a href="#beauty" className={css.list_item}>{t('navbar.beauty')}</a></li>
          <li><a href="#reviews" className={css.list_item}>{t('navbar.reviews')}</a></li>
          <li><a href="#meet-us" className={css.list_item}s>{t('navbar.meet_us')}</a></li>
        </ul>
        <button>
        <LanguageSwitcher />  
        </button>
        < MobileMenu />
        
      </nav>
    );
  };
  
  export default Navbar;
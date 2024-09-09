import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
    return (
      <nav>
        <div className="logo">Votre miel</div>
        <ul>
          <li><a href="#about-us">{t('navbar.about')}</a></li>
          <li><a href="#products">{t('navbar.products')}</a></li>
          <li><a href="#shop">{t('navbar.shop')}</a></li>
          <li><a href="#gallery">{t('navbar.gallery')}</a></li>
          <li><a href="#beauty">{t('navbar.beauty')}</a></li>
          <li><a href="#reviews">{t('navbar.reviews')}</a></li>
          <li><a href="#meet-us">{t('navbar.meet_us')}</a></li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
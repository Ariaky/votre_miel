import { useTranslation } from 'react-i18next';

const MobileMenu = () => {
    const  { t } = useTranslation();
    return (
        <button
            className="header-menu-toggle js-open-menu"
            aria-expanded="false"
            aria-controls="mobile-menu"
            type="button"
          >
            <svg
              className="header-menu-icon header-menu-icon-mobile"
              width="28"
              height="28"
            >
              <use href="/image/sprite.svg#icon-menu-28"></use>
            </svg>
            <svg
              className="header-menu-icon header-menu-icon-tablet"
              width="32"
              height="32"
            >
              <use href="/image/sprite.svg#icon-menu-32"></use>
            </svg>
        </button>
    );
};

export default MobileMenu;
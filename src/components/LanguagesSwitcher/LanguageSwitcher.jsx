import { useTranslation } from 'react-i18next';
import css from './LanguageSwitcher.module.css';
import LanguageSwitcher from '../../../src/images/LanguageSwitcher.png';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button className={css.language} conClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('fr')}>Français</button>
      <button onClick={() => changeLanguage('ua')}>Українська</button>
      <img src={LanguageSwitcher} alt="img" width="30" height="20" />
    </div>
  );
};

export default LanguageSwitcher;
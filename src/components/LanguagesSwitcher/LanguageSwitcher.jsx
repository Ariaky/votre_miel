import { useTranslation } from 'react-i18next';
import css from './LanguageSwitcher.module.css';
import LanguageSwitcherImg from '../../../src/images/LanguageSwitcherImg.png';
import LanguageSwitcherClickOnImg from'../../../src/images/LanguegeSwitcherClickOnImg.png';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button className={css.language} conClick={() => changeLanguage('en')}>English</button>
      <button className={css.language} onClick={() => changeLanguage('fr')}>Français</button>
      <button className={css.language} onClick={() => changeLanguage('ua')}>Українська</button>
      <img src={LanguageSwitcherImg} alt="img" width="128" height="64" />
      <img src={LanguageSwitcherClickOnImg} alt="imgClickOn" width="128" height="64" />
    </div>
  );
};

export default LanguageSwitcher;
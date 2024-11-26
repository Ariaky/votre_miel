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
    <div className={css.language_switcher_button}>
      <button className={css.button_text} conClick={() => changeLanguage('en')}>English</button>
      <button className={css.button_text} onClick={() => changeLanguage('fr')}>Français</button>
      <button className={css.button_text} onClick={() => changeLanguage('ua')}>Українська</button>
      <img className={css.img_button} src={LanguageSwitcherImg} alt="img" width="128" height="64" />
      <img className={css.img_button_on} src={LanguageSwitcherClickOnImg} alt="imgClickOn" width="128" height="64" />
    </div>
  );
};

export default LanguageSwitcher;
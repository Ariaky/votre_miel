import { useTranslation } from "react-i18next";

const HeroSection = () => {
    const { t } = useTranslation();

    return (
      <section className="hero">
        <h1>Votre miel</h1>
        <p>{t('hero.subtitle')}</p>
      </section>
    );
  };
  
  export default HeroSection;
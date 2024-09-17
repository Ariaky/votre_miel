import { useTranslation } from "react-i18next";

const AboutUs = () => {
    const { t } = useTranslation();

    return (
      <section id="about-us">
        <h2>{t('about_us.title')}</h2>
        <p>{t('about_us.content')}</p>
        <img src="path-to-image" alt="About Us" />
      </section>
    );
  };
  
  export default AboutUs;

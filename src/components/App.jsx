/*export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      Votre miel
    </div>
  );
};
*/
import React from 'react';
import Navbar from './Navbar/Navbar';
import HeroSection from './HeroSection/HeroSection';
import AboutUs from './AboutUs/AboutUs';
import Products from './Products/Products';
import Shop from './Shop/Shop';
import Gallery from './Gallery/Gallery';
import Beauty from './Beauty/Beauty';
import Reviews from './Reviews/Reviews';
import MeetUs from './MeetUs/MeetUs';
import Footer from './Footer/Footer';
/*import './App.css';*/

export const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Products />
      <Shop />
      <Gallery />
      <Beauty />
      <Reviews />
      <MeetUs />
      <Footer />
    </div>
  );
};


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
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import Shop from './components/Shop';
import Gallery from './components/Gallery';
import Beauty from './components/Beauty';
import Reviews from './components/Reviews';
import MeetUs from './components/MeetUs';
import Footer from './components/Footer';
import './App.css';

const App = () => {
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

export default App;
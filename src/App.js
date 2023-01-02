import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Card from './components/Card/Card';
import OurProcess from './components/OurProcess/OurProcess';
import WhatWeOffer from './components/WhatWeOffer/WhatWeOffer';
import Cleaning from './components/Cleaning/Cleaning';
import Gallery from './components/Gallery/Gallery';
import Shop from './components/Shop/Shop';
import Testimony from './components/Testimony/Testimony';
import Contact from './components/Contact/Contact';
import Hero from './components/Hero/Hero';


function App() {
  return (
    <div>
   
      <Hero/>
      <About/>
      
      <OurProcess/>
      <WhatWeOffer/>
      {/* <Cleaning/> */}
      <Gallery/>
      <Shop/>
      <Testimony/>
      <Contact/>
      
    </div>
  );
}

export default App;

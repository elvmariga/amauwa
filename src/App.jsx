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
import plant from './plants.svg';
import mobileplant from "./mobileplant.svg";


function App() {
  return (
    <div style={{ height: "100vh", display: "grid", justifyContent: "center" }}>
      <Hero />
      <About />

      <WhatWeOffer />
      <Cleaning/>

      <Gallery />
      <OurProcess />
      <Shop />
      <Testimony />
      <Contact />
      {/* <div>WE ARE COMING SOON!!</div> */}
{/*       <div className="image-container ">
        <img className="tablet-image" src={plant} alt="" />
        <img className="mobile-image" src={mobileplant} alt="" />
      </div> */}
      <div></div>
    </div>
  );
}

export default App;

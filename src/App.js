import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Card from './components/Card/Card';
import OurProcess from './components/OurProcess/OurProcess';
import WhatWeOffer from './components/WhatWeOffer/WhatWeOffer';
import Cleaning from './components/Cleaning/Cleaning';


function App() {
  return (
    <div>
      <Navbar/>
      <About/>
      
      <OurProcess/>
      <WhatWeOffer/>
      <Cleaning/>
    </div>
  );
}

export default App;

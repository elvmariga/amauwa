import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Card from './components/Card/Card';
import OurProcess from './components/OurProcess/OurProcess';
import WhatWeOffer from './components/WhatWeOffer/WhatWeOffer';


function App() {
  return (
    <div>
      <Navbar/>
      <About/>
      
      <OurProcess/>
      <WhatWeOffer/>
    </div>
  );
}

export default App;

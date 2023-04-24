import React from "react";
import "./Style/style.css";
import Logo from './Assests/logo.svg'
import { useState } from "react";
import Menu from './Assests/menu.png';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    const sectionId = event.target.getAttribute("href").slice(1);
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
    toggleNav();
  };

  
    
 const toggleNav = () => {
   setIsNavOpen(!isNavOpen);
   const links = document.querySelector(".links");
   if (isNavOpen) {
     links.classList.add("nav-open");
   } else {
     links.classList.remove("nav-open");
   }
 };

  return (
    <div className="navbar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      {/* <button>Toggle</button> */}
      <img
        src={Menu}
        onClick={toggleNav}
        className="toggle-button"
        alt="icon"
      />
      <div className={`links ${isNavOpen ? "nav-open" : "nav-closed"}`}>
        <ul>
          <a href="#hero" onClick={handleClick}>
            Home
          </a>
          <a href="#about" onClick={handleClick}>
            About us
          </a>
          <a href="#whatweoffer" onClick={handleClick}>
            What we offer
          </a>
          <a href="#gallery" onClick={handleClick}>
            Gallery
          </a>

          <a
            style={{
              backgroundColor: "#184e06",
              padding: "10px 4px",
              borderRadius: "4px",
            }}
            href="#contact"
            onClick={handleClick}
          >
            Contact Us
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

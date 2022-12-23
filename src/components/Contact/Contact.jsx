import React from "react";
import './Style/style.css';


const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-content">
        <div className="contact-details">
          <h2>Contact Us</h2>
          <a href="tel:+">
            <i className="fa-solid fa-phone fa-xl icon"></i> 070707
          </a>
          <a
            href="href=mailto:midlandprep17@gmail.com?subject=Inquiry&body=The%20body%20of%20the%20email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-regular fa-envelope fa-xl icon"></i>{" "}
            amauwa@gmail.com
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <i class="fa-solid fa-location-dot fa-xl icon"></i> Location
          </a>

          <div className="links">
            <a href="http:// " target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-whatsapp fa-xl icon"></i>
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-twitter fa-xl icon"></i>
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook fa-xl icon"></i>
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram fa-xl icon"></i>
            </a>
          </div>
        </div>
        <div className="contact-form">
          <form action="">
            <h2>Reach Us</h2>
            <p>
              Have a question or want to request a quote, send us a message
              below.
            </p>
            <div className="inputs">
              <input type="text" name="Name" id="name" placeholder="Full Name" />
            <input
              type="tel"
              name="phone"
              id="phone "
              placeholder="Phone Number"
            />
            <input type="text" name="Topic" id="topic" placeholder="Topic" />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>

            <input className="submit" type="submit" value=" Send Message" />
            </div>
            
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

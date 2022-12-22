import React from 'react';
import GetQuote from '../GetQuote/GetQuote';
import Line from '../Line/Line';
import './Style/Style.css'

const About = () => {
  return (
    <div className="about">
      <div className="introBanner">
        <h1 className="introTitle">Bringing Nature into Your Space</h1>

        <p>
          Amauwa offers the best landscaping services in Nairobi. We aim to
          leave your compound beautiful and with a long-lasting impact.
        </p>
        <GetQuote/>
      </div>
      <div className="aboutdetails">
        <h1>About Amauwa Landscaping</h1>
        <div>
          <Line />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}

export default About
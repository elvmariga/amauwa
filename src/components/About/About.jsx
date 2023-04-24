import React from 'react';
import GetQuote from '../GetQuote/GetQuote';
import Line from '../Line/Line';
import './Style/Style.css'

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about-content">
        <div className="introBanner">
          <h1 className="introTitle">Bringing Nature into Your Space</h1>

          <p>
            Transform your outdoor space into a breathtaking oasis with Amauwa!
            {/* <p>
              {" "}
              As the leading provider of landscaping services in Nairobi, we're
              dedicated to creating unique and sustainable designs that will
              leave a long-lasting impression.{" "}
            </p> */}
          </p>
          <p> Contact us today to make your landscaping dreams a reality!</p>

          <GetQuote />
        </div>
        <div className="aboutdetails">
          <h1>About Amauwa Landscaping</h1>
          <div>
            <Line />
          </div>
          <p>
            Our company specializes in providing top-quality landscaping and
            cleaning services to homes and businesses. With years of experience
            in the industry, we pride ourselves on delivering exceptional
            results and outstanding customer service. Our landscaping team is
            made up of skilled professionals who have a passion for creating
            beautiful and functional outdoor spaces.
          </p>
          <p>
            From designing and installing new landscapes to maintaining existing
            ones, we are dedicated to ensuring that our clients' properties look
            their best all year round. Additionally, our cleaning services team
            uses the latest techniques and equipment to provide thorough and
            efficient cleaning solutions, leaving your home or office spotless
            and refreshed. We strive to exceed our clients' expectations with
            every project we undertake, and we are committed to building
            long-lasting relationships based on trust and quality service.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About
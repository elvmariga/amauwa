import React from 'react';
import PropTypes from 'prop-types';
import  './Style/Style.css';
import Line2 from "../Line2/Line";
import Tick from './Assests/tick.svg'
import GetQuote from '../GetQuote/GetQuote';
import Gallery from '../Gallery/Gallery';

const WhatWeOffer = () => {
return (
  <div className="whatWeOffer" id="whatweoffer">
    <div className="whatWeOfferContent">
      <div className="title">
        <h1>Landscaping Services</h1>
        <Line2 />
      </div>
      <div className="cards">
        <div className="offerCard card1">
          <h4>Frontyard Landscaping</h4>
        </div>
        <div className="offerCard card2">
          <h4>Kitchen garden</h4>
        </div>
        <div className="offerCard card3">
          <h4>Interior plants design</h4>
        </div>
        <div className="offerCard card4">
          <h4>Garden maintenance</h4>
        </div>
      </div>
      <div className="other-services">
        <h2 className="other-service-title">Other Services</h2>
        <p className="other-service-details">
          Transform your outdoor space into a lush paradise with our
          comprehensive landscaping services. From design to maintenance, we
          offer a wide range of services to help you achieve the garden of your
          dreams. Check out our full list of other landscaping services below!
        </p>
{/*         <ul>
          <li>
            <img src={Tick} alt="checkbox" /> Potting
          </li>
          <li>
            <img src={Tick} alt="checkbox" /> Designing baskets
          </li>
          <li>
            <img src={Tick} alt="checkbox" /> Propagation
          </li>
          <li>
            <img src={Tick} alt="checkbox" /> Budding
          </li>
          <li>
            <img src={Tick} alt="checkbox" /> Cutting edges
          </li>
        </ul> */}
      </div>
      <div>
        <GetQuote />
      </div>
    </div>
  </div>
);

};
WhatWeOffer.propTypes = {};

WhatWeOffer.defaultProps = {};

export default WhatWeOffer;

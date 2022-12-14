import React from 'react';
import PropTypes from 'prop-types';
import  './Style/Style.css';
import Line from "../Line/Line";
import Tick from './Assests/tick.svg'
import GetQuote from '../GetQuote/GetQuote';

const Cleaning = () => (
  <div className="cleaning">
    <div className="cleaningContent">
      <div className="title">
        <h1>Cleaning Services</h1>
        <Line />
      </div>
      <div className="cards">
        <div className="offerCard">
          <h4>Frontyard Landscaping</h4>
        </div>
        <div className="offerCard">
          <h4>Kitchen garden</h4>
        </div>
        <div className="offerCard">
          <h4>Interior plants design</h4>
        </div>
        <div className="offerCard">
          <h4>Garden maintenance</h4>
        </div>
      </div>
      <div className="other-services">
        <h2 className="other-service-title">Other Services</h2>
        <p className="other-service-details">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <ul>
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
        </ul>
      </div>
      <div>
        <GetQuote />
      </div>
    </div>
  </div>
);

Cleaning.propTypes = {};

Cleaning.defaultProps = {};

export default Cleaning;

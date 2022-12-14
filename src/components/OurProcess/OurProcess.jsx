import React from 'react';
import PropTypes from 'prop-types';
import './Style/Style.css';
import Line from '../Line/Line';
import Card from '../Card/Card';
import step1 from "./Assests/step1.png";
import step2 from "./Assests/step2.png";
import step3 from "./Assests/step3.png";
import step4 from "./Assests/step4.png";

const OurProcess = () => (
  <div className="ourProcess">
    <div className="ourProcessContent">
      <div className="title">
        <h1>Our Process</h1>
        <h1 style={{ margin: "0" }}>
          <Line />
        </h1>
      </div>
      <div className="card">
        <Card
          step="01"
          step1_Icon={step1}
          stepIcon="Step 1 Icon"
          title="Send Inquiry"
          details="You send us an inquiry"
        />
        <Card
          step="02"
          step1_Icon={step2}
          stepIcon="Step 2 Icon"
          title="Consultation & Quote"
          details="We visit site, assess the environment & give quote "
        />
        <Card
          step="03"
          step1_Icon={step3}
          stepIcon="Step 3 Icon"
          title="Design & Plan"
          details="After confirmation, we plan for the new design"
        />
        <Card
          step="04"
          step1_Icon={step4}
          stepIcon="Step 3 Icon"
          title="Start working"
          details="We officially start the job! "
        />
      </div>
    </div>
  </div>
);

OurProcess.propTypes = {};

OurProcess.defaultProps = {};

export default OurProcess;

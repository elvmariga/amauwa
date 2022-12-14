import React from 'react'

import './Style/style.css'

const Card = (props) => {
  return (
    <div className="card">
      <div className="cardContent">
        
        <div className="cardDetail">
          <h2>{props.step}</h2>
          <div className="iconRow">
            <div className="icon">
              <img src={props.step1_Icon} alt={props.stepIcon} />
            </div>
            <h3>{props.title}</h3>
          </div>
          <p>{props.details}</p>
        </div>
      </div>
      
    </div>
  );
}

export default Card
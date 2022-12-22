import React from 'react'
import './Style/style.css'
import p1 from './Assets/p1.png';
import p2 from "./Assets/p2.png";
import p3 from './Assets/p3.png';
import p4 from './Assets/p4.png';
import p5 from "./Assets/p5.png";
import p6 from "./Assets/p6.png";
import Line from '../Line/Line';

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="title">
        <div className="title-content">
          <h1>Our Gallery</h1>
          <Line />
        </div>
      </div>
      <div className="images">
        <img src={p1} alt="image" />
        <img src={p2} alt="image" />
        <img src={p3} alt="image" />
        <img src={p4} alt="image" />
        <img src={p5} alt="image" />
        <img src={p6} alt="image" />
      </div>

      <div className="view-more">
      <a href="http://">View more</a>
      </div>
    </div>
  );
}

export default Gallery
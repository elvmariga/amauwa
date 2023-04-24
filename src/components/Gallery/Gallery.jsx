import React from "react";
import "./Style/style.css";
import Line from "../Line/Line";

import p1 from "./Assets/p1.png";
import p2 from "./Assets/p2.png";
import p3 from "./Assets/p3.png";
import p4 from "./Assets/p4.png";
import p5 from "./Assets/p5.png";
import p6 from "./Assets/p6.png";

const images = [p1, p2, p3, p4, p5, p6];

const Gallery = () => {
  return (
    <div className="gallery" id="gallery">
      <div className="title">
        <div className="title-content">
          <h1>Our Gallery</h1>
          <Line />
        </div>
      </div>
      <div className="images">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`image-${index}`} />
        ))}
      </div>

      <div className="view-more">
        <a href="http://">View more</a>
      </div>

      
    </div>
  );
};

export default Gallery;

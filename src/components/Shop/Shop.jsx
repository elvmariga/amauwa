import React from 'react';
import './Style/style.css';
import Line from '../Line2/Line';
import Product from './Product';
import pic from './Assests/IMG-20220917-WA0012 1.png';

const Shop = () => {
  return (
    <div className="shop">
      <div className="title">
        <div className="titlecontent">
          <h1>Amauwa Plant Shop</h1>
          <p>
            <a href=""> Visit shop</a>
          </p>
        </div>
      
          <Line />
       
      </div>
      <div className="cards">
        <Product
          image={pic}
          title="Succulent Plants"
          details="KSH 500"
          buttonText=" Coming Soon"
          handleClick={() => alert("Button clicked!")}
        />
        <Product
          image={pic}
          title="My Image"
          details="Some details about the image"
          buttonText="Click me"
          handleClick={() => alert("Button clicked!")}
        />
        <Product
          image={pic}
          title="My Image"
          details="Some details about the image"
          buttonText="Click me"
          handleClick={() => alert("Button clicked!")}
        />
        <Product
          image={pic}
          title="My Image"
          details="Some details about the image"
          buttonText="Click me"
          handleClick={() => alert("Button clicked!")}
        />
      </div>
    </div>
  );
}

export default Shop
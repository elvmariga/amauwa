import React from 'react';
import './Style/style.css';
import Line from '../Line2/Line';
import Product from './Product';
import Soon from './Assests/soon.png'
import pic from './Assests/IMG-20220917-WA0012 1.png';
import pic2 from "./Assests/IMG-20220917-WA0004 3.png";

const Shop = () => {
  return (
    <div className="shop">
      <div className="title">
        <div className="titlecontent">
          <h1>Amauwa Plant Shop</h1>
          {/* <p>
            <a href=""> Visit shop</a>
          </p> */}
        </div>

        <Line />
      </div>
      <div className="cards">
        <Product
          image={Soon}
          title="All Plants"
          details="Starting from KES: 500"
          buttonText=" Coming Soon"
          handleClick={() => alert("Button clicked!")}
        />
        <Product
          image={pic}
          title="Succulent Plant"
          details="Starting from KES: 500"
          buttonText=" Coming Soon"
          handleClick={() => alert("Button clicked!")}
        />
        <Product
          image={pic}
          title="Succulent Plant"
          details="Starting from KES: 500"
          buttonText=" Coming Soon"
          handleClick={() => alert("Button clicked!")}
        />
        <Product
          image={pic}
          title="Succulent Plant"
          details="Starting from KES: 500"
          buttonText=" Coming Soon"
          handleClick={() => alert("Button clicked!")}
        />
        <Product
          image={pic}
          title="Succulent Plant"
          details="Starting from KES: 500"
          buttonText=" Coming Soon"
          handleClick={() => alert("Button clicked!")}
        />
      </div>
    </div>
  );
}

export default Shop
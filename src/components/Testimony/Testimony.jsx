import React from 'react'
import './Style/style.css'
import Line from '../Line/Line'
import ClientCard from './ClientCard'
import pic from './Assets/client.png'
import Contact from '../Contact/Contact'

const Testimony = () => {
  return (
    <div className="testimony">
      <div className="testimony-content">
        <div className="title">
          <h1>What our clients say</h1>
          <Line />
        </div>

        <div className="cards">
          <div>
            <ClientCard
              image={pic}
              title="My Image"
              details="Some details about the image Some details about the image Some details about the image Some details about the image v vSome details about the image vv"
            />
            <ClientCard
              image={pic}
              title="My Image"
              details="Some details about the image"
            />
          </div>
          <div>
            <ClientCard
              image={pic}
              title="My Image"
              details="Some details about the image"
            />
            <ClientCard
              image={pic}
              title="My Image"
              details="Some details about the image"
            />
          </div>
          <hr />
        </div>
      </div>
      {/* <Contact/> */}
    </div>
  );
}

export default Testimony
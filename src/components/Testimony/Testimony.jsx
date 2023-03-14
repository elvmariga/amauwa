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
              details="I cannot recommend Amauwa enough! Their team completely transformed my dull and lifeless backyard into a stunning outdoor paradise. They were professional, creative, and so easy to work with. My family and I now spend all of our time outside enjoying our new space."
            />
            <ClientCard
              image={pic}
              title="My Image"
              details="Amauwa's cleaning services are second to none! They cleaned my entire office space from top to bottom, and it was spotless when they were finished. Their attention to detail is impressive, and their team was incredibly friendly and professional."
            />
          </div>
          <div>
            <ClientCard
              image={pic}
              title="My Image"
              details="I had a vision for my landscaping, and Amauwa brought it to life! Their team listened to all of my ideas and created a design that was even better than I had imagined. They were efficient, tidy, and kept me informed throughout the entire process. I am so happy with the final result!"
            />
            <ClientCard
              image={pic}
              title="My Image"
              details="Amauwa is the best of the best! Their team went above and beyond to make sure that my landscaping was perfect. They truly care about their clients and take pride in their work. I will definitely be using their services again in the future!"
            />
          </div>
        </div>
       
        <hr />
      </div>
      {/* <Contact/> */}
    </div>
  );
}

export default Testimony
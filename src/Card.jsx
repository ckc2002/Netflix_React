import React from 'react';
import Image from './Image';
import Heading from './Heading'

function Card(web) {
  return (
  <>
    <div className="cards">
      <div className="card">
        <Image imgsrc= {web.imgsrc} />
        {/* <img src= {web.imgsrc} alt="myPic" className="card_img" /> */}
        <div className="card_info">
          <span className="card_category">{web.title}</span>
          <Heading sname={web.sname} />
          {/* <h3 className="card_title"> {web.sname}</h3> */}
          <a href = {web.link} target="_blank" rel="noreferrer">
            <button> Watch Now</button>
          </a>
        </div>
      </div>
    </div>
 </>)
}

export default Card;

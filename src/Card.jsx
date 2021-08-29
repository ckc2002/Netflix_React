import React from 'react';

function Card(web) {
  return (
  <>
    <div className="cards">
      <div className="card">
        <img src= {web.imgsrc} alt="myPic" className="card_img" />
        <div className="card_info">
          <span className="card_category">{web.title}</span>
          <h3 className="card_title"> {web.sname}</h3>
          <a href = {web.link} target="_blank" rel="noopener noreferrer">
            <button> Watch Now</button>
          </a>
        </div>
      </div>
    </div>
 </>)
}

export default Card;

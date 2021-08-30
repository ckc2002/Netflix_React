import React from "react";

const Heading = (web) =>{
    return <h3 className="card_title"> {web.sname}</h3>
}

const HeadingTop = () => {
    return <h1 className= "heading_style">Top 15 Netflix Series</h1>
}

export default Heading;

export {HeadingTop};
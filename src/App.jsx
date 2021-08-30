import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
import {HeadingTop} from "./Heading";

const App = () => {
    return (

        <>
        <HeadingTop />
        {/* <h1 className= "heading_style">Top 15 Netflix Series</h1>    */}
        {Sdata.map((val) => {
        return (
            <Card key = {val.id}
                imgsrc = {val.imgsrc}
                title = {val.title}
                sname = {val.sname}
                link = {val.links}
            />
        )
        })
    }
      </>
    )
}

export default App;
import React, { Component } from 'react';
import "../review.css"
const review = ({setInfo,info}) => {
    console.log("render");
    return (        
        <article className="review">
            <h1 >{info[0].image}</h1>
            <h1>{info[0].name}</h1>
             <h2>{info[0].profession}</h2>
             <p>{info[0].review}</p>
        </article>       
     );
}
 
export default review;
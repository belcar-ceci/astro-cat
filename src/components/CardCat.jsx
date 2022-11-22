import React from "react";

import JsonData from "../data/catAstral.json";
import dataImages from "../assets/dataImg/dataImages";

import "../assets/styles/cardCat.css";

const CardCat = ({value}) => {
 
  return (
    <section>
      <div className="cats-img">
        <img  src={dataImages[value]} alt={JsonData.cats[value].name} />
      </div>
      <div className="cats-info">
        <h2>{JsonData.cats[value].name}</h2>
        <p className="cats-description ">{JsonData.cats[value].description}</p>
      </div>
    </section>
  );

 
};

export default CardCat;

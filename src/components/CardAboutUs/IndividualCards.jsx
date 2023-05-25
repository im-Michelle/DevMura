import * as React from 'react';
import "./cardAbout.css";

import { colors } from "../../ui/colors";
const  IndividualCards = ({img, name, rol, description}) => {
  return (  
    
    <div className="card" style={{ maxWidth: 345, backgroundColor: `${colors.cards}`}}>
      <div className="header-container">
        <div className="image-container">
          <img src={img} alt={name} />
        </div>
        <div className="title-container">
          <h2 style={{ color: `${colors.primaryText}`}}> {name} </h2>
          <h3 style={{ color: `${colors.navy}`}}> {rol}  </h3>
        </div>
      </div>
      <p style={{ color: `${colors.background}`}}>{description}</p>
    </div>    
  );
}

export default IndividualCards;
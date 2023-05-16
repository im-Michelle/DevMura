import * as React from 'react';
import "./cardAbout.css";

const  IndividualCards = ({img, name, rol, description, alt }) => {
  return (  
    
    <div className="card" style={{ maxWidth: 345, backgroundColor: "#A8DADC"}}>
      <div className="header-container">
        <div className="image-container">
          <img src={img} alt={alt} />
        </div>
        <div className="title-container">
          <h2 style={{ color: "#163b59"}}> {name} </h2>
          <h3> {rol} </h3>
        </div>
      </div>
      <p>{description}</p>
    </div>    
  );
}

export default IndividualCards;
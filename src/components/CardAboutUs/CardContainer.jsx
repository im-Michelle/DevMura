import * as React from 'react';
import "./cardContainer.css";


const CardContainer = (props) => {
    return <div className="card-container">{props.children}</div>;
  }

  export default CardContainer;
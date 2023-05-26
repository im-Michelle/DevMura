import * as React from 'react';
import "./cardAbout.css";

import { colors } from "../../ui/colors";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const  IndividualCards = ({img, name, rol, description, linkedIn, gitHub}) => {
  return (  
    
    <div className="card" style={{ maxWidth: 345, backgroundColor: `${colors.cards}`}}>
      <div className="header-container">
        <div className="image-container">
          <img src={img} alt={name} />
        </div>
        <div className="title-container">
          <h2 style={{ color: `${colors.navy}` , fontWeight: 'bold'}}> {name} </h2>
          <h3 style={{ color: `${colors.navy}`}}> {rol}  </h3>
        </div>
      </div>
      <p style={{ color: `${colors.background}` , textAlign: 'justify'}}>{description}</p>
      <div className="icon-container">
        <a href={linkedIn} target="_blank">
          <LinkedInIcon style={{ color: `${colors.navy}`, fontSize: '42px', margin: 'auto' }} />
        </a>
        <a href={gitHub} target="_blank">
          <GitHubIcon style={{ color: `${colors.navy}`, fontSize: '42px', margin: 'auto' }} />
        </a>
      </div>
    </div>    
  );
}

export default IndividualCards;
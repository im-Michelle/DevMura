import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import "./cardAbout.css";

import { colors } from "../../ui/colors";

const  TestiMonialCard = ({img, name, rol, description }) => {
  return (  
    <Card sx={{ maxWidth: 345 , backgroundColor: `${colors.lightBlue}`}}>
      <div class="card">
        <div class="header-container">
          <div class="image-container">
            <img src={img}alt={name} />
          </div>
          <div class="title-container">
            <h2> {name} </h2>
            <h3> {rol} </h3>
          </div>
        </div>
        <p>{description}</p>
      </div>
    </Card>
    
  );
}

export default TestiMonialCard;
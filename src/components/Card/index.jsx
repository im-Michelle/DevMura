import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';

import { colors } from "../../ui/colors";

const  TestiMonialCard = ({img, name, description }) => {
  return (
    <Card sx={{ maxWidth: 345 , backgroundColor: `${colors.new}`}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={img}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{color: "white"}}>
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{color: "white"}}>
            { description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
  );
}

export default TestiMonialCard;
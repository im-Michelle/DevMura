import './alerts.css';
import { Alert, AlertTitle } from '@mui/material';

const Alerts = ({type, title, message}) => {
  return(
    <Alert severity={type}>
      <AlertTitle>{title}</AlertTitle>
      {message} - <strong>check it out!</strong>
    </Alert>
  );
};

export default Alerts;
import './alerts.css';
import AlertTitle from '@mui/material/Alert/Alert';

const Alert = (props) => {
  return(
    <div className={`alert ${props.type}`}>
      <AlertTitle>{props.title}</AlertTitle>
      {props.message}
    </div>
  )
}

export default Alert;
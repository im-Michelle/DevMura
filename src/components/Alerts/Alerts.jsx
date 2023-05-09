import './alerts.css'

const Alert = (props) => {
  return(
    <alert>
      <AlertTitle>{props.title}</AlertTitle>
      {props.body}
    </alert>
  )
}

export default Alert;
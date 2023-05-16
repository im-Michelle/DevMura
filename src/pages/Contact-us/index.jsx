import React, { useState } from 'react';
import NavbarDefault from "../../components/Navbar-Default/index";
import "./ContactUs.css";
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import FormControl from '@mui/material/FormControl';
import styled from "@emotion/styled";
import { colors } from "../../ui/colors";

import Typography from '@mui/material/Typography';

const Main = styled.main`
  width: 100%;
  background-color: ${colors.new};
`;

const Header = styled.header`
  width: 100%;
  height: 90vh;
  background-image: url("./img/background-AboutUs.png");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    background-color: #00000097;
    font-size: 4rem;
    color: ${colors.primaryText};
    text-align: center;
    width: 90%;
    max-width: 800px;
  }
  h2 {
    font-size: 2rem;
    color: ${colors.secondaryText};
    text-align: center;
    width: 90%;
    max-width: 800px;
  }
`;

const FormContainer = styled(Container)`
   height: fit-content;
   background-color: ${colors.new};
   color: blue;
   max-width: 1024px;
   padding: 0 20px;
   padding: 3rem;
   padding-top: 0rem;
   padding-bottom: 8rem;
   margin: auto;
   border-radius: white 10px;
`
;

const HeaderDiv = styled(Container)`
  color: white;
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 4rem;
`

const CustomTextField = styled(TextField)`
   padding:1%;
   display: block;
   margin: auto;
   width: 100%;
   div {
    width: 100%;
   }
   label {
    color: white;
   }
   fieldset { 
    border-color: white;
   }
   input {
    color: white;
   }
   textarea {
    color: white;
   }
`;
const SubmitButton = styled(Button)`
   margin-top: 3rem;
`

const StyledH3 = styled.h3`
   font-size: 40px;
`

const StyledH4 = styled.h4`
   color: gray;
   font-size: 14px;
`

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [validationError, setValidationError] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateInputs = () => {
    // Validar que los campos no estén vacíos y que el correo electrónico sea válido
    if (name.trim() === '' || email.trim() === '' || phone.trim() === '' || message.trim() === '') {
      setValidationError(true);
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setValidationError(true);
      return false;
    }

    setValidationError(false);
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateInputs()) {
      return;
    }

    // Aquí puedes agregar la lógica para enviar los datos del formulario por correo electrónico
    // Puedes utilizar una librería o servicio de envío de correos electrónicos como Nodemailer o SendGrid

    setSubmitSuccess(true);
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
  };

  const handleSnackbarClose = () => {
    setSubmitSuccess(false);
  };

  return (
    <>
        <NavbarDefault/>
        <Main>
            <Header>
              <h1> Contact us </h1>
            </Header>
            <HeaderDiv>
              <StyledH3> Get in touch </StyledH3>
              <StyledH4> How can we help you? We are DevMura and we are here for you! </StyledH4>
            </HeaderDiv>

            <FormContainer fullWidth  maxWidth="sm">
              <form action="https://formsubmit.co/sofia.gmagk@gmail.com" method="POST">
                <FormControl fullWidth sx={{ m: 1 }} >
                  <CustomTextField
                    name="name"
                    label="Name"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />

                  <CustomTextField
                    name="email"
                    label="E-mail"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <CustomTextField
                    name="phone"
                    label="Phone"
                    variant="outlined"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />

                  <CustomTextField
                    name="message"
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />

                  <SubmitButton
                    type="submit"
                    variant="contained"
                    color="primary"
                  >
                    Submit
                  </SubmitButton>
                </FormControl>
              </form>
              

              <Snackbar
                open={validationError}
                autoHideDuration={4000}
                onClose={() => setValidationError(false)}
              message="Por favor, complete todos los campos correctamente"
            />
            
            <Snackbar
              open={submitSuccess}
              autoHideDuration={4000}
              onClose={handleSnackbarClose}
              message="¡Mensaje enviado con éxito!"
            />
          </FormContainer>
        </Main>
    </>
  );    
};


export default ContactUs;


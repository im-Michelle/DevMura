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
import Footer from '../../components/Footer';
import TitleHead from "../../components/TitleHead";


const Main = styled.main`
  width: 100%;
  background-color: ${colors.new};
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
    if (name.trim() === '' || email.trim() === '' || phone.trim() === '' || message.trim() === '') {
      setValidationError(true);
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setValidationError(true);
      return false;
    }

    const nameRegex = /^[a-zA-Z áíóúé]+$/;
    if (!nameRegex.test(name)) {
      setValidationError(true);
      return false;
    }

    const phoneRegex = /^[0-9]+$/;
    if (!phoneRegex.test(phone)) {
      setValidationError(true);
      return false;
    }

    setValidationError(false);
    return true;
  };

  const handleSubmit = (event) => {

    if (!validateInputs()) {
      event.preventDefault();
      return;
    } else {
      return
    }

  
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
            <TitleHead titulo="Contact us" imageUrl="https://images.pexels.com/photos/7689133/pexels-photo-7689133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            <HeaderDiv>
              <StyledH3> Get in touch </StyledH3>
              <StyledH4> How can we help you? We are DevMura and we are here for you! </StyledH4>
            </HeaderDiv>

            <FormContainer fullwidth="true"  maxWidth="sm">
              <form action="https://formsubmit.co/codefusiondevmura@gmail.com" method="POST">
                <FormControl fullWidth sx={{ m: 1 }} >
                  <CustomTextField
                    name="name"
                    label="Name"
                    variant="standard"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />

                  <CustomTextField
                    name="email"
                    label="E-mail"
                    variant="standard"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />

                  <CustomTextField
                    name="phone"
                    label="Phone"
                    variant="standard"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />

                  <CustomTextField
                    name="message"
                    label="Message"
                    variant="standard"
                    multiline
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />

                  <SubmitButton
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    sx={{ backgroundColor:'#E63946',":hover":{backgroundColor:'#1D3557' } }}
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
              severity="success"
            />
          </FormContainer>

          <Footer/>
        </Main>
    </>
  );    
};


export default ContactUs;


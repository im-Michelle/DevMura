import React from "react";
import { useEffect } from 'react';
import styled from "@emotion/styled";
import { colors } from "../../ui/colors";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { IconButton, InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link as LinkReactRouter } from "react-router-dom";
import { login } from "../../service/Login/login";
import { getOwnUser } from "../../service/Gets/getOwnUserService";


const Main = styled.main`
  width: 100%;
  height: max-content;
  background-color: ${colors.new};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Form = styled(Box)`
  width: 40%;
  height: 100vh;
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 799px) {
    width: 100%;
  }
  h1 {
    font-size: 2.3rem;
    color: ${colors.primaryText};
    font-weight: 700;
  }
  .MuiFormLabel-root {
    font-size: 1.3rem;
  }
  .MuiButton-root {
    margin-top: 1rem;
  }
  .MuiSvgIcon-root {
    font-size: 2rem;
  }
`;
const FormImg = styled.div`
  display: flex;
  width: 60%;
  height: 100vh;
  background-image: url("https://images.pexels.com/photos/8721342/pexels-photo-8721342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 80%;
  }
  @media (max-width: 799px) {
    display: none;
  }
`;
const TextFieldStyled = styled(TextField)`
  input {
    color: ${colors.primaryText};
  }
  label {
    color: ${colors.primaryText};
  }
  .MuiInput-underline:before {
    border-bottom-color: ${colors.navy}; 
  }
  .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom-color: ${colors.vibrantBlue}; 
  }
  .MuiInput-underline:after {
    border-bottom-color: ${colors.primaryText}; 
  }
  .MuiFormHelperText-root {
    color: ${colors.secondaryText}; 
  }
  .MuiFormLabel-root.Mui-error {
    color: ${colors.contrast}; 
  }
  .MuiInputLabel-root {
    color: ${colors.vibrantBlue};
  }
  .MuiInputLabel-root.Mui-focused {
    color: ${colors.lightBlue}; 
  }
`;
const MessageLogin = styled.p`
  color: ${colors.primaryText};
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 1rem;
  a {
    color: ${colors.vibrantBlue};
    text-decoration: none;
  }
`;
const SignIn = () => {
  const [formValues, setFormValues] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const [formErrors, setFormErrors] = useState({});
  const [formValid, setFormValid] = useState(false);

  const validateForm = () =>{
    const errors = {};

    // validate email
    /* if(!formValues.email){
      errors.email = "Email is required";
    }else if(!/\S+@\S+\.\S+/.test(formValues.email)){
      errors.email = "Email is invalid";
    } */

    // validate password
    if(!formValues.username){
      errors.username = "Username is required";
    }else if(formValues.username.length < 3){
      errors.username = "Username must be at least 3 characters";
    }
    if(!formValues.password){
      errors.password = "Password is required";
    }else if(formValues.password.length < 6){
      errors.password = "Password must be at least 6 characters";
    }

    setFormErrors(errors);
    setFormValid(Object.keys(errors).length === 0);
  }

  const handleFormSubmit = async () => {
    const e = {preventDefault: () => {} };
    validateForm();
    if(formValid){
      //console.log(formValues)
      //console.log("Form is valid");
      try{
        await login(formValues.username, formValues.password);        
      }catch(error){
        //console.log(error);
      }
    } 
  }

  useEffect(() => {
    if (formValid) {
      handleFormSubmit();
    }
  }, [formValid]);

  const handleClick = async (e) => {
    e.preventDefault();
    await handleFormSubmit(e);
  }

  return (
    <>
      <Main>
        <Form
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "60%" },
          }}
          noValidate
        >
          <h1>Sign In to DevMura</h1>
          {/* <TextFieldStyled
            id="email"
            name="email"
            label="Email"
            type="email"
            variant="standard"
            helperText={formErrors.email ? formErrors.email : null}
            error={formErrors.email ? true : false}
            required
            value={formValues.email || ""}
            onChange={(e) => setFormValues({...formValues, email: e.target.value})}
          /> */}
          <TextFieldStyled
            id="username"
            name="username"
            label="Username"
            variant="standard"
            helperText={formErrors.username ? formErrors.username : null}
            error={formErrors.username ? true : false}
            required
            value={formValues.username || ""}
            onChange={(e) => setFormValues({...formValues, username: e.target.value})}
          />
          <TextFieldStyled
            id="password"
            name="password"
            label="Password"
            variant="standard"
            type={showPassword ? "text" : "password"}
            helperText={formErrors.password ? formErrors.password : null}
            required
            value={formValues.password || ""}
            onChange={(e) => setFormValues({...formValues, password: e.target.value})}
            error={formErrors.password ? true : false}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                    style={{ color: colors.secondaryText }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Stack direction="row" spacing={2}>
            <Button 
              onClick={handleClick}
              variant="contained" 
              type="submit" 
              sx={{ backgroundColor:'#E63946',":hover":{backgroundColor:'#1D3557' } }} /* disabled={formValid} */>
              Sign In
            </Button>
          </Stack>
          <MessageLogin>
            New to DevMura? <LinkReactRouter to="/sign-up">Create an account</LinkReactRouter>
          </MessageLogin>
        </Form>

        <FormImg>
          <img src="/img/icono-logo-blanco.svg" alt="" />
        </FormImg>
      </Main>
    </>
  );
};

export default SignIn;


import React from "react";
import styled from "@emotion/styled";
import { colors } from "../../ui/colors";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { IconButton, InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Main = styled.main`
  width: 100%;
  height: max-content;
  background-color: ${colors.new};
  display: flex;
  flex-direction: row-reverse;
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
  background-image: url("https://images.pexels.com/photos/3435272/pexels-photo-3435272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
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

const SignUp = () => {
  const [formValues, setFormValues] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };
  const handleFormReset = () => {
    setFormValues({});
  };
  const inputAdornment = (
    <InputAdornment position="end">
      <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
  );
  return (
    <>
      <Main>
        <Form
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "60%" },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleFormSubmit}
        >
          <h1>Sign Up to DevMura</h1>
          <TextFieldStyled
            id="standard-basic"
            type="text"
            label="Name"
            variant="standard"
            helperText="Please enter your name"
            required
            inputProps={{ style: { textTransform: "capitalize" } }}
          />
          <TextFieldStyled
            id="standard-basic"
            type="text"
            label="Last Name"
            variant="standard"
            helperText="Please enter your Last Name"
            required
          />
          <TextFieldStyled
            id="standard-basic"
            label="Username"
            type="text"
            variant="standard"
            helperText="Please enter your username"
            required
          />
          <TextFieldStyled
            id="standard-basic"
            label="Email"
            type="email"
            variant="standard"
            helperText="Please enter your email"
            required
          />
          <TextFieldStyled
            id="standard-basic"
            label="Password"
            variant="standard"
            type={showPassword ? "text" : "password"}
            helperText="Please enter your password"
            required
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
          <TextFieldStyled
            id="standard-basic"
            label="Age"
            variant="standard"
            type="Number"
            helperText="Please enter your age"
            required
            min="18"
            max="100"
          />
          <FormLabel
            id="demo-row-radio-buttons-group-label"
            required
            style={{ color: colors.vibrantBlue }}
          >
            Gender
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio style={{ color: colors.vibrantBlue }} />}
              label="Female"
              style={{ color: colors.vibrantBlue }}
            />
            <FormControlLabel
              value="male"
              control={<Radio style={{ color: colors.vibrantBlue }} />}
              label="Male"
              style={{ color: colors.vibrantBlue }}
            />
            <FormControlLabel
              value="other"
              control={<Radio style={{ color: colors.vibrantBlue }} />}
              label="Other"
              style={{ color: colors.vibrantBlue }}
            />
          </RadioGroup>
          <FormControlLabel
            required
            control={<Checkbox style={{ color: colors.vibrantBlue }} />}
            label="Creating an account means you're okay with our Terms of Service, Privacy Policy, and our default Notificacion Settings."
            style={{ color: colors.vibrantBlue }}
          />
          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              type="reset"
              onClick={handleFormReset}
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
            <Button variant="contained" type="submit" endIcon={<SendIcon />}>
              Send
            </Button>
          </Stack>
        </Form>

        <FormImg>
          <img src="/img/icono-logo-blanco.svg" alt="" />
        </FormImg>
      </Main>
    </>
  );
};

export default SignUp;

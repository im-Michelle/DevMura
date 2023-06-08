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
import { Link as LinkReactRouter } from "react-router-dom";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { IconButton, InputAdornment, Link } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Autocomplete from '@mui/material/Autocomplete';
import { countrys } from "./countries";
import { userRegister } from "../../service/userRegister";

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
  height: auto;
  min-height: 100vh;
  overflow-y: auto;
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1313px) {
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
  height: auto;
  min-height: 100vh;
  overflow-y: hidden;
  background-image: url("https://images.pexels.com/photos/3435272/pexels-photo-3435272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
  }
  @media (max-width: 1313px) {
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
    color: ${colors.primaryText};
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
const CustomAutoComplete = styled(Autocomplete)`
  color: ${colors.primaryText};
  font-size: 1.2rem;
  font-weight: 500;
  margin-top: 1rem;
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

`;
const SignUp = () => {
  const [formValues, setFormValues] = useState({});

  // use state para ver el password
  const [showPassword, setShowPassword] = useState(false);

  // boton para el submit
  const [buttonActive, setButtonActive] = useState(true);

  // boton para aceptar los terminos y condiciones
  const [terms, setTerms] = useState(false);

  // valores de los inputs
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  // validadores de los inputs
  const [isValidName, setIsValidName] = useState(true);
  const [isValidLastName, setIsValidLastName] = useState(true);
  const [isValidUserName, setIsValidUserName] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidAge, setIsValidAge] = useState(true);
  //const [isValidGender, setIsValidGender] = useState(false);

  const [passwordErrors, setPasswordErrors] = useState([]);

  // Validadores del password uno por uno

  const validateLength = (inputValue) => {
    if (inputValue.length < 8) {
      return 'At least 8 characters are required.';
    }
    return '';
  };
  
  const validateUppercase = (inputValue) => {
    const regexUppercase = /^(?=.*[A-Z])/;
    if (!regexUppercase.test(inputValue)) {
      return 'At least one uppercase letter is required.';
    }
    return '';
  };
  
  const validateNumber = (inputValue) => {
    const regexNumber = /^(?=.*\d)/;
    if (!regexNumber.test(inputValue)) {
      return 'At least one number is required.';
    }
    return '';
  };
  
  const validateSpecialCharacter = (inputValue) => {
    const regexSpecialCharacter = /^(?=.*[@$!%*?&])/;
    if (!regexSpecialCharacter.test(inputValue)) {
      return 'At least one special character is required.';
    }
    return '';
  };

  // validadores de los inputs
  const handleInputNameChange = (e) => {
    const inputValue = e.target.value;
    const regeName = "^[A-Za-záéíóúüñÁÉÍÓÚÜÑ]+(?: [A-Za-záéíóúüñÁÉÍÓÚÜÑ]+)*$";
    if (
      inputValue.length < 3 ||
      inputValue.length > 50 ||
      !inputValue.match(regeName)
    ) {
      setIsValidName(false);
      setName(inputValue);
    } else {
      setIsValidName(true);
      setName(inputValue);
    }
  };

  const handleInputLastNameChange = (e) => {
    const inputValue = e.target.value;
    const regexLastName =
      "^[A-Za-záéíóúüñÁÉÍÓÚÜÑ]+(?: [A-Za-záéíóúüñÁÉÍÓÚÜÑ]+)*$";
    if (
      inputValue.length < 3 ||
      inputValue.length > 50 ||
      !inputValue.match(regexLastName)
    ) {
      setIsValidLastName(false);
      setLastName(inputValue);
    } else {
      setIsValidLastName(true);
      setLastName(inputValue);
    }
  };

  const handleInputUserNameChange = (e) => {
    const inputValue = e.target.value;
    const regexUserName = "^[a-zA-Z0-9._-]{3,16}$";
    if (
      inputValue.length < 3 ||
      inputValue.length > 50 ||
      !inputValue.match(regexUserName)
    ) {
      setIsValidUserName(false);
      setUserName(inputValue);
    } else {
      setIsValidUserName(true);
      setUserName(inputValue);
    }
  };

  const handleInputEmailChange = (e) => {
    const inputValue = e.target.value;
    const regexEmail = "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$";
    if (
      inputValue.length < 3 ||
      inputValue.length > 50 ||
      !inputValue.match(regexEmail)
    ) {
      setIsValidEmail(false);
      setEmail(inputValue);
    } else {
      setIsValidEmail(true);
      setEmail(inputValue);
    }
  };

  const handleInputPasswordChange = (e) => {
    const inputValue = e.target.value;
    const errors = [
      validateLength(inputValue),
      validateUppercase(inputValue),
      validateNumber(inputValue),
      validateSpecialCharacter(inputValue)
    ].filter(error => error !== '');
  
    setIsValidPassword(errors.length === 0);
    setPassword(inputValue);
    setPasswordErrors(errors);
  };

  const handleInputAgeChange = (e) => {
    const inputValue = e.target.value;
    const regexAge = "^[0-9]{2,3}$";
    if (inputValue < 18 || !inputValue.match(regexAge) || inputValue > 130) {
      setIsValidAge(false);
      setAge(inputValue);
    } else {
      setIsValidAge(true);
      setAge(inputValue);
    }
  };
  const handleInputCountryChange = (e, value) => {
    if(value){
      setSelectedCountry(value);
    }else{
      setSelectedCountry('');
    }
  };

  const handleInputGenderChange = (e) => {
    const inputValue = e.target.value;
    setGender(inputValue);
  };

  const handleActiveButton = () => {
    if (
      isValidName &&
      isValidLastName &&
      isValidUserName &&
      isValidEmail &&
      isValidPassword &&
      isValidAge &&
      terms
    ) {
      setButtonActive(true);
    } else {
      setButtonActive(true);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  const handleSubmmit = () => {
    if (
      isValidName &&
      isValidLastName &&
      isValidUserName &&
      isValidEmail &&
      isValidPassword &&
      isValidAge &&
      terms
    ) {
      const UpdatedFormValues = {
        age: parseInt(age),
        name: name,
        lastName: lastName,
        userName: userName,
        email: email,
        password: password,
        country:  selectedCountry.id, 
        gender: gender,
      };
      userRegister(UpdatedFormValues, name)
      console.log("Formulario enviado");
      //console.log(UpdatedFormValues);
    } else {
      console.log("Formulario no enviado");
    }
  };
  const handleTerms = () => {
    if (terms ) {
      setTerms(true);
    } else {
      setTerms(true);
    }
  };

  return (
    <>
      <Main>
        <Form
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "90%" },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleFormSubmit}
          onChange={handleActiveButton}
        >
          <h1>Sign Up to DevMura</h1>
          <TextFieldStyled
            id="name"
            type="text"
            label="Name"
            variant="standard"
            value={name}
            helperText={isValidName ? "" : "Invalid name"}
            error={!isValidName}
            required
            inputProps={{ style: { textTransform: "capitalize" } }}
            onChange={handleInputNameChange}
          />
          <TextFieldStyled
            id="lastName"
            type="text"
            label="Last Name"
            variant="standard"
            value={lastName}
            helperText={isValidLastName ? "" : "Invalid last name"}
            error={!isValidLastName}
            required
            inputProps={{ style: { textTransform: "capitalize" } }}
            onChange={handleInputLastNameChange}
          />
          <TextFieldStyled
            id="userName"
            label="Username"
            type="text"
            variant="standard"
            value={userName}
            onChange={handleInputUserNameChange}
            error={!isValidUserName}
            helperText={isValidUserName ? "" : "Invalid username"}
            required
          />
          <TextFieldStyled
            id="email"
            label="Email"
            type="email"
            variant="standard"
            value={email}
            error={!isValidEmail}
            helperText={isValidEmail ? "" : "Invalid email"}
            required
            onChange={handleInputEmailChange}
          />
          <TextFieldStyled
            id="password"
            label="Password"
            variant="standard"
            type={showPassword ? "text" : "password"}
            helperText={
              isValidPassword
                ? "Password: at least 8 characters with uppercase, lowercase, numbers, and special characters."
                : passwordErrors.join(' ')
            }
            error={!isValidPassword}
            value={password}
            onChange={handleInputPasswordChange}
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
            id="age"
            label="Age"
            variant="standard"
            type="Number"
            helperText={isValidAge ? "" : "Invalid age"}
            required
            min="18"
            max="100"
            value={age}
            onChange={handleInputAgeChange}
            error={!isValidAge}
          />
          <CustomAutoComplete
            disablePortal
            id="paises"
            variant="standard"
            options={countrys}
            value={selectedCountry}
            onChange={handleInputCountryChange}
            renderInput={(params) => <TextFieldStyled {...params} label="Country" />}
            //getOptionLabel={(option) => option.label}
          />
          <FormLabel
            id="formLabel"
            required
            style={{ color: colors.primaryText }}
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
              control={<Radio style={{ color: colors.primaryText }} />}
              label="Female"
              style={{ color: colors.primaryText }}
              onChange={handleInputGenderChange}
            />
            <FormControlLabel
              value="male"
              control={<Radio style={{ color: colors.primaryText }} />}
              label="Male"
              onChange={handleInputGenderChange}
              style={{ color: colors.primaryText }}
            />
            <FormControlLabel
              value="other"
              control={<Radio style={{ color: colors.primaryText }} />}
              label="Other"
              onChange={handleInputGenderChange}
              style={{ color: colors.primaryText }}
            />
          </RadioGroup>
          <FormControlLabel
            required
            control={<Checkbox style={{ color: colors.primaryText }} />}
            label="Creating an account means you're okay with our Terms of Service, Privacy Policy, and our default Notificacion Settings."
            style={{ color: colors.primaryText }}
            value={terms}
            onChange={handleTerms}
          />
          <Stack direction="row" /* spacing={2} */>
            <Button
              variant="contained"
              type="submit"
              onClick={handleSubmmit}
              //! boton negado para que se active
              disabled={!buttonActive}
              sx={{ backgroundColor:'#E63946',":hover":{backgroundColor:'#1D3557' } }} 
            >
              Sign Up
            </Button>
          </Stack>
          <MessageLogin>
            Already have an account? <LinkReactRouter to="/sign-in">Sign in</LinkReactRouter>
          </MessageLogin>
        </Form>
        <FormImg>
          <img src="/img/icono-logo-blanco.svg" alt="" />
        </FormImg>
      </Main>
    </>
  );
};
export default SignUp;

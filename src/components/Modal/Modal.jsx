import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import { colors } from "../../ui/colors";
import "./modal.css";
import TextFields from '../TextFields';
import Autocomplete from '@mui/material/Autocomplete';
import Button from "@mui/material/Button";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { getCountries } from "../../service/Gets/countryService"


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
  .MuiInputLabel-root {
    color: ${colors.primaryText};
  }
  .MuiInputLabel-root.Mui-focused {
    color: ${colors.lightBlue};
  }
`;

const ModalProfile = ({ open, onClose }) => {
    // valores de los inputs
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [selectedCountry, setSelectedCountry] = useState("");

    // validadores de los inputs
  const [isValidName, setIsValidName] = useState(true);
  const [isValidLastName, setIsValidLastName] = useState(true);
  const [isValidAge, setIsValidAge] = useState(true);
  const [countries,setCountries] = useState([]);


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

  //Form
  const handleActiveButton = () => {
    if (
      isValidName &&
      isValidLastName &&
      isValidAge
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


  // Boton

  // Use Effects
  //useEffect(() => {
    //const fetchCountries = async () => {
      //const countries = await getCountries();
      //setCountries(countries);
    //};
  
    //fetchCountries();
  //}, []);


  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box className="modal-container"  sx={{p: 4,}}>
        <div id='title'>
          <h3 id="parent-modal-title" style={{ color: colors.lightBlue }}>Edit profile</h3>
        </div>
        <Box className="form">
          <p id="parent-modal-description" style={{ color: colors.lightBlue }}>Basic Information</p>
          <TextFields
            id="name"
            type="text"
            label="Name"
            variant="standard"
            value={name}
            helperText={isValidName ? '' : 'Invalid name'}
            error={!isValidName}
            required
            inputProps={{ style: { textTransform: 'capitalize' } }}
            onChange={handleInputNameChange}
          />

          <TextFields
            id="last name"
            type="text"
            label="Last Name"
            variant="standard"
            value={lastName}
            helperText={isValidName ? '' : 'Invalid last name'}
            error={!isValidName}
            required
            inputProps={{ style: { textTransform: 'capitalize' } }}
            onChange={handleInputLastNameChange}
          />

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker label="Birthday" className='customDatePicker'/>
            </DemoContainer>
          </LocalizationProvider>

          <TextFields
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
            options={countries}
            value={selectedCountry}
            onChange={handleInputCountryChange}
            renderInput={(params) => <TextFields {...params} label="Country"variant="standard" required/>}
          />

          <TextFields
            id="last name"
            type="text"
            label="Bio"
            variant="standard"
            value={lastName}
            helperText={isValidName ? '' : 'Invalid last name'}
            error={!isValidName}
            required
            inputProps={{ style: { textTransform: 'capitalize' } }}
            onChange={handleInputLastNameChange}
          />

          <TextFields
            id="last name"
            type="text"
            label="Github"
            variant="standard"
            value={lastName}
            helperText={isValidName ? '' : 'Invalid last name'}
            error={!isValidName}
            required
            inputProps={{ style: { textTransform: 'capitalize' } }}
            onChange={handleInputLastNameChange}
          />

          <TextFields
            id="last name"
            type="text"
            label="LinkedIn"
            variant="standard"
            value={lastName}
            helperText={isValidName ? '' : 'Invalid last name'}
            error={!isValidName}
            required
            inputProps={{ style: { textTransform: 'capitalize' } }}
            onChange={handleInputLastNameChange}
          />

          <TextFields
            id="last name"
            type="text"
            label="Role"
            variant="standard"
            value={lastName}
            helperText={isValidName ? '' : 'Invalid last name'}
            error={!isValidName}
            required
            inputProps={{ style: { textTransform: 'capitalize' } }}
            onChange={handleInputLastNameChange}
          />
        </Box>
        <div className='button-container'>
          <Button
            type="button"
            className='custom-button'
            sx={{ color: 'white',backgroundColor: '#E63946',":hover":{backgroundColor:'#1D3557' } }} 
          > 
            Guardar 
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default ModalProfile;

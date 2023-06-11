import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import { colors } from "../../../ui/colors"
import "./modal.css";
import TextFields from '../../TextFields/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from "@mui/material/Button";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from "@mui/material/TextField";


import { getCountries } from "../../../service/Gets/countryService"

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

const ModalProfile = ({ open, onClose, name, lastName }) => {
  // valores de los inputs
  const [age, setAge] = useState(null);
  const [birthday, setBirthday] = useState(null);
  const [gender, setGender] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [bio, setBio] = useState('');
  
  // validadores de los inputs
  const [isValidName, setIsValidName] = useState(true);
  const [isValidLastName, setIsValidLastName] = useState(true);
  const [isValidAge, setIsValidAge] = useState(true);
  const [countries,setCountries] = useState([]);
  const [ageError, setAgeError] = useState('');


  console.log("1",age);

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

  console.log("2",age);

  const handleInputAgeChange = () => {
    if (birthday) {
      const today = new Date();
      const birthDate = new Date(birthday);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
  
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
  
      if (age < 18 || age > 100) {
        setAgeError('Invalid age');
      } else {
        setAgeError('');
      }
  
      setAge(age.toString());
    } else {
      setAge('');
    }
  };
  
  const handleInputCountryChange = (e, value) => {
    if(value){
      setSelectedCountry(value);
    }else{
      setSelectedCountry('');
    }
  };

  const handleChange = (event) => {
    setBio(event.target.value);
  };

  const languages = [
    { name: 'Ada'},
    { name: 'Angular'},
    { name: 'ASP. NET'},
    { name: 'Assembly'},
    { name: 'AWS'},
  ];

  console.log("3",age);

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box className="modal-container"  sx={{p: 4}}>
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
            helperText={isValidLastName ? '' : 'Invalid last name'}
            error={!isValidLastName}
            required
            inputProps={{ style: { textTransform: 'capitalize' } }}
            onChange={handleInputLastNameChange}
          />
          <Box style={{ display: 'flex' , margin: 15}}>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker
                  label="Birthday"
                  className="customDatePicker"
                  onChange={(date) => {
                    setBirthday(date);
                    handleInputAgeChange();
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>

            <TextFieldStyled
              id="age"
              label="Age"
              variant="standard"
              value={age ? age.toString() : ""}
              readOnly
              sx={{ width: '20%', marginLeft: 10 }}
              helperText={ageError}
              error={ageError !== ''}
            />

          </Box>
          <CustomAutoComplete
            disablePortal
            id="paises"
            options={countries}
            value={selectedCountry}
            onChange={handleInputCountryChange}
            renderInput={(params) => <TextFields {...params} label="Country"variant="standard" required/>}
          />
          
          <Box className="multiline" sx={{ width: '80%' }}>
            <TextField
              id="outlined-multiline-static"
              label="Bio"
              multiline
              rows={4}
              defaultValue="Bio here"
              sx={{
                color: 'white',
                width: '120%',
                '& .MuiInputBase-root': {
                  color: 'white',
                },
                '& .MuiInputBase-root::before': {
                  borderBottomColor: 'white',
                },
                '& .MuiInputBase-root:hover::before': {
                  borderBottomColor: 'yellow',
                },
                '& .MuiInputBase-root::after': {
                  borderBottomColor: 'white',
                },
              }}
              InputLabelProps={{
                sx: {
                  color: 'white',
                },
              }}
              InputProps={{
                sx: {
                  color: 'white',
                },
              }}
              onFocus={(e) => {
                if (e.target.value === 'Description here') {
                  e.target.value = '';
                }
              }}
              onBlur={(e) => {
                if (e.target.value === '') {
                  e.target.value = 'Description here';
                }
              }}
            />
          </Box>

          <TextFields
            id="github"
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

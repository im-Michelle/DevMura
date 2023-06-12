import { useState, useEffect } from 'react';
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
import Chip from '@mui/material/Chip'
import { withTheme } from 'styled-components';

import { getCountries } from "../../../service/Gets/countryService";
import { getGenders } from "../../../service/Gets/genderService";

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

const TextFieldStyled = withTheme(styled(TextField)`
  margin-bottom: 10px;
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

  @media (max-width: 600px) {
    margin-left: 2px;
  }

  @media (min-width: 601px) {
    margin-left: 15px;
  }
`);

const LanguagesAutocomplete = styled(Autocomplete)`
  input {
    margin: 18px;
  }

  .MuiInputLabel-root {
    color: ${colors.primaryText};
  }

  .MuiInputLabel-root.Mui-focused {
    color: ${colors.lightBlue};
  }

  .MuiInputBase-root {
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
`;

const ModalProfile = ({ open, onClose, name, lastName, bio, role, age, location, gender }) => {
  // valores de los inputs
  const [countries,setCountries] = useState([]);
  const [genders,setGenders] = useState([]);

  const [birthday, setBirthday] = useState(null);
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  const [github, setGitHub] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [imgProfile, setImgProfile] = useState('');
  const [backgroundProfile, setBackgroundProfile] = useState('');
  const [level, setLevel] = useState('');
  
  // validadores de los inputs
  const [isValidName, setIsValidName] = useState(true);
  const [isValidLastName, setIsValidLastName] = useState(true);
  const [ageError, setAgeError] = useState('');
  const [isValidGit, setIsValidGit] = useState(true);
  const [isValidLinkedin, setIsValidLinkedin] = useState(true);
  const [isValidImgProfile, setIsValidImgProfile] = useState(true);
  const [isValidBackgroundProfile, setIsValidBackgroundProfile] = useState(true);
  const [isValidRole, setIsValidRole] = useState(true);
  const [isValidBio, setIsValidBio] = useState(true);

  // validadores de los inputs
  const handleInputNameChange = (e) => {
    const newName = e.target.value;
    const regeName = "^[A-Za-záéíóúüñÁÉÍÓÚÜÑ]+(?: [A-Za-záéíóúüñÁÉÍÓÚÜÑ]+)*$";
    if (
      newName.length < 3 ||
      newName.length > 50 ||
      !newName.match(regeName)
    ) {
      setIsValidName(false);
    } else {
      setIsValidName(true);
      setName(newName);
      console.log(newName);
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

  const handleInputCountryChange = (e, value) => {
    if(value){
      setSelectedCountry(value);
    }else{
      setSelectedCountry('');
    }
  };

  const handleInputGenderChange = (e, value) => {
    if(value){
      setSelectedGender(value);
    }else{
      setSelectedGender('');
    }
  };


  const handleInputGitHubChange = (e) => {
    const inputValue = e.target.value;
    const regexGitHub = 
      "^[A-Za-záéíóúüñÁÉÍÓÚÜÑ0-9]+(?: [A-Za-záéíóúüñÁÉÍÓÚÜÑ0-9]+)*$";
    if (
      inputValue.length < 0 ||
      inputValue.length > 50 ||
      !inputValue.match(regexGitHub)
    ) {
      setIsValidGit(false);
      setGitHub(inputValue);
    } else {
      setIsValidGit(true);
      setGitHub(inputValue);
    }
  };

  const handleInputLinkedInChange = (e) => {
    const inputValue = e.target.value;
    const regexLinkedIn = 
      "^[A-Za-záéíóúüñÁÉÍÓÚÜÑ0-9]+(?: [A-Za-záéíóúüñÁÉÍÓÚÜÑ0-9]+)*$";
    if (
      inputValue.length < 0 ||
      inputValue.length > 100 ||
      !inputValue.match(regexLinkedIn)
    ) {
      setIsValidLinkedin(false);
      setLinkedin(inputValue);
    } else {
      setIsValidLinkedin(true);
      setLinkedin(inputValue);
    }
  };

  const handleInputImgProfileChange = (e) => {
    const inputValue = e.target.value;
    const regexImgProfile = 
      /^(?:https?:\/\/)?(?:www\.)?[A-Za-záéíóúüñÁÉÍÓÚÜÑ0-9.-]+\.[A-Za-záéíóúüñÁÉÍÓÚÜÑ]{2,}(?:\/[\w.-]*)*\/?$/i;
    if (
      inputValue.length < 10 ||
      inputValue.length > 150 ||
      !inputValue.match(regexImgProfile)
    ) {
      setIsValidImgProfile(false);
      setImgProfile(inputValue);
    } else {
      setIsValidImgProfile(true);
      setImgProfile(inputValue);
    }
};


  const handleInputBackgroundProfileChange = (e) => {
    const inputValue = e.target.value;
    const regexBackgroundProfile = 
      /^(?:https?:\/\/)?(?:www\.)?[A-Za-záéíóúüñÁÉÍÓÚÜÑ0-9.-]+\.[A-Za-záéíóúüñÁÉÍÓÚÜÑ]{2,}(?:\/[\w.-]*)*\/?$/i;
    if (
      inputValue.length < 0 ||
      inputValue.length > 150 ||
      !inputValue.match(regexBackgroundProfile)
    ) {
      setIsValidBackgroundProfile(false);
      setBackgroundProfile(inputValue);
    } else {
      setIsValidBackgroundProfile(true);
      setBackgroundProfile(inputValue);
    }
  };

  const handleInputRoleChange = (e) => {
    const inputValue = e.target.value;
    const regexRole = 
      "^[A-Za-záéíóúüñÁÉÍÓÚÜÑ]+(?: [A-Za-záéíóúüñÁÉÍÓÚÜÑ]+)*$";
    if (
      inputValue.length < 0 ||
      inputValue.length > 100 ||
      !inputValue.match(regexRole)
    ) {
      setIsValidRole(false);
      setRole(inputValue);
    } else {
      setIsValiRole(true);
      setRole(inputValue);
    }
  };

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

  const handleChange = (event) => {
    setBio(event.target.value);
  };

  useEffect(() => {
    const fetchCountries = async () => {
      const countries = await getCountries();
      setCountries(countries);
    };
  
    fetchCountries();
  }, []);

  useEffect(() => {
    const fetchGenders= async () => {
      const genders = await getGenders();
      setGenders(genders);
    };
  
    fetchGenders();
  }, []);

  const languages = [
    { name: 'Ada'},
    { name: 'Angular'},
    { name: 'ASP. NET'},
    { name: 'Assembly'},
    { name: 'AWS'},
  ];

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
              sx={{ width: '20%'}}
              helperText={ageError}
              error={ageError !== ''}
            />

          </Box>
          <CustomAutoComplete
            disablePortal
            id="paises"
            options={countries}
            value={location}
            onChange={handleInputCountryChange}
            renderInput={(params) => <TextFieldStyled {...params} label="Country"variant="standard" required/>}
          />

          <CustomAutoComplete
            disablePortal
            id="genders"
            options={genders}
            value={gender}
            onChange={handleInputGenderChange}
            renderInput={(params) => <TextFields {...params} label="Gender"variant="standard" required/>}
          />
          
          <Box className="multiline">
            <TextField
              id="outlined-multiline-static"
              label="Bio"
              multiline
              rows={4}
              value={bio}
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
            value={github}
            helperText={isValidGit ? '' : 'Invalid GitHub name'}
            error={!isValidGit}
            required
            inputProps={{ style: { textTransform: 'capitalize' } }}
            onChange={handleInputGitHubChange}
          />

          <TextFields
            id="linkedin"
            type="text"
            label="LinkedIn"
            variant="standard"
            value={linkedin}
            helperText={isValidLinkedin ? '' : 'Invalid LinkedIn name'}
            error={!isValidLinkedin}
            required
            inputProps={{ style: { textTransform: 'capitalize' } }}
            onChange={handleInputLinkedInChange}
          />

          <TextFields
            id="imgProfile"
            type="text"
            label="Profile Image"
            variant="standard"
            value={imgProfile}
            helperText={isValidImgProfile ? '' : 'Invalid url for image'}
            error={!isValidImgProfile}
            required
            inputProps={{ style: { textTransform: 'capitalize' } }}
            onChange={handleInputImgProfileChange}
          />

          <TextFields
            id="backgroundProfile"
            type="text"
            label="Background Image"
            variant="standard"
            value={backgroundProfile}
            helperText={isValidBackgroundProfile ? '' : 'Invalid url for image'}
            error={!isValidBackgroundProfile}
            required
            inputProps={{ style: { textTransform: 'capitalize' } }}
            onChange={handleInputBackgroundProfileChange}
          />

          <TextFields
            id="role"
            type="text"
            label="Role"
            variant="standard"
            value={role}
            helperText={isValidRole ? '' : 'Invalid LinkedIn name'}
            error={!isValidRole}
            required
            inputProps={{ style: { textTransform: 'capitalize' } }}
            onChange={handleInputRoleChange}
          />

          <LanguagesAutocomplete
            multiple
            id="tags-standard"
            options={languages}
            getOptionLabel={(option) => option.name}
            defaultValue={[languages[3]]}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  label={option.name}
                  {...getTagProps({ index })}
                  sx={{
                    backgroundColor: colors.contrast,
                    color: 'white',
                  }}
                />
              ))
            }
            renderInput={(params) => (
              <TextFieldStyled
                {...params}
                variant="standard"
                label="Languages"
                placeholder="That you know"
              />
            )}
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

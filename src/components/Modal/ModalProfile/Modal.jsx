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
import MiniModal from "../../Modal/ModalChanges/ModalChanges"
import Chip from '@mui/material/Chip'
import { withTheme } from 'styled-components';

import { getLanguages } from '../../../service/Gets/languageService';
import { getCountries } from "../../../service/Gets/countryService";
import { updateProfile } from '../../../service/Puts/putProfile';
import { json } from 'react-router';
import { ConstructionOutlined } from '@mui/icons-material';

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

const ModalProfile = ({ 
  open, 
  onClose, 
  id,
  birthday: defaultBirthday,
  age: defaultAge,
  bio: defaultBio,
  img: defaultImg,
  github: defaultGitHub,
  likedin: defaultLikedin,
  createdAt,
  background: defaultBackground,
  role: defaultRole,
  name: defaultName,
  lastName: defaultLastName, 
  countryName: defaultCountryName,
  countryCode: defaultCountryCode,
  userName,
  languageProfiles : defaultLanguageProfiles,
  token,
  profile, 
  setProfile}) => {
  //Mini modal
  const [showMiniModal, setShowMiniModal] = useState(false);

  // valores de countries y languages
  const [countries,setCountries] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [selectedNameLanguages, setSelectedNameLanguages] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  console.log("id ", selectedLanguages);
  // Valores nuevos de los inputs
  const [newBirthday, setNewBirthday] = useState("");
  const [newAge, setNewAge] = useState("");
  const [newBio, setNewBio] = useState("");
  const [newImg, setNewImg] = useState("");
  const [newGitHub, setNewGitHub] = useState("");
  const [newLikedin, setNewLikedin] = useState("");
  const [newBackground, setNewBackground] = useState("");
  const [newRole, setNewRole] = useState("");
  const [newName, setNewName] = useState("");
  const [newLastName, setNewLastName] = useState("");

  // validadores de los inputs
  const [isValidName, setIsValidName] = useState(true);
  const [isValidLastName, setIsValidLastName] = useState(true);
  const [ageError, setAgeError] = useState('');
  const [isValidGitHub,  setIsValidGitHub] = useState(true);
  const [isValidLikedin, setIsValidLikedin] = useState(true);
  const [isValidImg, setIsValidImg] = useState(true);
  const [isValidBackground, setIsValidBackground] = useState(true);
  const [isValidRole, setIsValidRole] = useState(true);
  const [isValidBio, setIsValidBio] = useState(true);

  // validadores de los inputs
  const handleInputNameChange = (e) => {
    const newName = e.target.value;
    const regeName = /^[A-Za-záéíóúüñÁÉÍÓÚÜÑ]+(?: [A-Za-záéíóúüñÁÉÍÓÚÜÑ]+)*$/;
    if (
      newName.length > 50 || !newName.match(regeName)) {
      setIsValidName(false);
    } else {
      setIsValidName(true);
      setNewName(newName);
    }
  };

  const handleInputLastNameChange = (e) => {
    const newLastName = e.target.value;
    const regexLastName = /^[A-Za-záéíóúüñÁÉÍÓÚÜÑ]+(?: [A-Za-záéíóúüñÁÉÍÓÚÜÑ]+)*$/;
      if (newLastName.length > 50 || !newLastName.match(regexLastName)) {
        setIsValidLastName(false);
      } else {
        setIsValidLastName(true);
        setNewLastName(newLastName);
      }
  };

  const handleInputCountryChange = (e, value) => {
    if(value){
      setSelectedCountry(value);
    }else{
      setSelectedCountry('');
    }
  };

  const handleInputBioChange = (e) => {
    const newBio = e.target.value;
    if(newBio.length > 100){
      setIsValidBio(false);
    }else{
      setIsValidBio(true);
      setNewBio(newBio);
    }
  }

  const handleInputGitHubChange = (e) => {
    const newGitHub = e.target.value;
    const regexGitHub = /^https:\/\/github\.com\/.*$/;
    if (newGitHub.length > 50 || !newGitHub.match(regexGitHub)) {
      setIsValidGitHub(false);
    } else {
      setIsValidGitHub(true);
      setNewGitHub(newGitHub);
    }
  };

  const handleInputLikedInChange = (e) => {
    const newLikedin = e.target.value;
    const regexLikedIn =  /^https:\/\/www\.linkedin\.com\/in\/.*$/;
    if (newLikedin.length > 100 || !newLikedin.match(regexLikedIn)) {
      setIsValidLikedin(false);
    } else {
      setIsValidLikedin(true);
      setNewLikedin(newLikedin);
    }
  };  

  const handleInputImgChange = (e) => {
    const newImg = e.target.value;
    //const regexImg = /^(?:https?:\/\/)?(?:www\.)?[A-Za-záéíóúüñÁÉÍÓÚÜÑ0-9.-]+\.[A-Za-záéíóúüñÁÉÍÓÚÜÑ]{2,}(?:\/[\w.-]*)*\/?$/i;
    if (newImg.length > 300 
      //|| !newImg.match(regexImg)
      ) {
      setIsValidImg(false);
    } else {
      setIsValidImg(true);
      setNewImg(newImg);
    }
};

  const handleInputBackgroundChange = (e) => {
    const newBackground = e.target.value;
    //const regexBackground = /^(?:https?:\/\/)?(?:www\.)?[A-Za-záéíóúüñÁÉÍÓÚÜÑ0-9.-]+\.[A-Za-záéíóúüñÁÉÍÓÚÜÑ]{2,}(?:\/[\w.-]*)*\/?$/i;
    if (newBackground.length > 300 
      //|| !newBackground.match(regexBackground)
      ) {
      setIsValidBackground(false);
    } else {
      setIsValidBackground(true);
      setNewBackground(newBackground);
    }
  };

  const handleInputRoleChange = (e) => {
    const inputValue = e.target.value;
    const regexRole = "^[A-Za-záéíóúüñÁÉÍÓÚÜÑ]+(?: [A-Za-záéíóúüñÁÉÍÓÚÜÑ]+)*$";
    if (inputValue.length > 100 || !inputValue.match(regexRole)) {
      setIsValidRole(false);
      setNewRole(inputValue);
    } else {
      setIsValidRole(true);
      setNewRole(inputValue);
    }
  };

  const handleInputAgeChange = (date) => {
    if (date) {
      const formattedDate = date.toISOString().split("T")[0];
      setNewBirthday(formattedDate);
      const today = new Date();
      const birthDate = new Date(date);
      let newAge = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
  
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        newAge--;
      }
  
      if (newAge < 18 || newAge > 100) {
        setAgeError('Invalid age');
      } else {
        setAgeError('');
      }
  
      setNewAge(newAge.toString());
    } else {
      setNewBirthday('');
      setNewAge('');
    }
  };  

  const handleSubmmit = async () => {
    if (isValidName && 
      isValidLastName &&
      isValidBio &&
      isValidGitHub &&
      isValidLikedin &&
      isValidImg &&
      isValidBackground &&
      isValidRole) {
      try {
        const profileData = {
          id: id,
          birthday: newBirthday,
          age: newAge || age,
          bio: newBio || defaultBio,
          img: newImg || defaultImg,
          github: newGitHub || defaultGitHub,
          likedin: newLikedin || defaultLikedin,
          createdAt: createdAt,
          background: newBackground || defaultBackground,
          role: newRole || defaultRole,
          name: newName || defaultName,
          lastName: newLastName || defaultLastName,
          country: selectedCountry.code || defaultCountryCode,
          username: userName,
          countryName: selectedCountry.label || defaultCountryName,
          posts: [],
          idsLanguages: selectedLanguages,
        };
        await updateProfile(id, profileData, token);
        handleSaveChanges();
        handleLocalChanges(profile);
        console.log("guardado");
      } catch (error) {
        //console.log("Perfil no actualizado", error);
      }
    } else {
      //console.log("Faltan validaciones");
    } 
  };

const handleSaveChanges = () =>{
  defaultName = newName;
  defaultLastName = newLastName;
  defaultBirthday = newBirthday;
  defaultAge = newAge;
  defaultBio = newBio;
  defaultCountryName = selectedCountry;
  defaultGitHub = newGitHub;
  defaultLikedin = newLikedin;
  defaultImg = newImg;
  defaultBackground = newBackground;
  defaultRole = newRole;
  defaultLanguageProfiles = selectedNameLanguages.slice();
}

const handleLocalChanges = (profile) => {
  localStorage.removeItem("name");
  localStorage.removeItem("lastName");
  localStorage.removeItem("birthday");
  localStorage.removeItem("age");
  localStorage.removeItem("bio");
  localStorage.removeItem("countryName");
  localStorage.removeItem("github");
  localStorage.removeItem("likedin");
  localStorage.removeItem("img");
  localStorage.removeItem("background");
  localStorage.removeItem("role");
  localStorage.removeItem("languagesProfiles");

  localStorage.setItem("name", newName);
  localStorage.setItem("lastName", newLastName);
  localStorage.setItem("birthday", newBirthday);
  localStorage.setItem("age", newAge);
  localStorage.setItem("bio", newBio);
  localStorage.setItem("countryName", selectedCountry);
  localStorage.setItem("github", newGitHub);
  localStorage.setItem("likedin", newLikedin);
  localStorage.setItem("img", newImg);
  localStorage.setItem("background", newBackground);
  localStorage.setItem("role", newRole);
  localStorage.setItem("selectedNameLanguages", JSON.stringify(selectedNameLanguages));

  setProfile({...profile, 
    name: newName, 
    lastName: newLastName,
    birthday: newBirthday,
    age: newAge,
    bio: newBio,
    countryName: selectedCountry,
    github: newGitHub,
    likedin: newLikedin,
    img: newImg,
    background: newBackground,
    role: newRole,
    languageProfiles: selectedNameLanguages
  });

  handleClose();
}
  
// UseEffects
useEffect(() => {
  if (defaultName !== null) {
    setNewName(defaultName);
  }
}, [defaultName]);

useEffect(() => {
  if (defaultLastName !== null) {
    setNewLastName(defaultLastName);
  }
}, [defaultLastName]);

useEffect(() => {
  if (defaultLanguageProfiles.length !== 0) {
    setSelectedNameLanguages(defaultLanguageProfiles);
  }
}, [defaultLanguageProfiles]);

useEffect(() => {
  if (defaultCountryName !== null) {
    setSelectedCountry(defaultCountryName);
  }
}, [defaultCountryName]);

useEffect(() => {
  if (defaultBio !== null) {
    setNewBio(defaultBio);
  }else if (defaultBio === null){
    setNewBio(null);
  }
}, [defaultBio]);

useEffect(() => {
  if (defaultGitHub !== null) {
    setNewGitHub(defaultGitHub);
  }else if (defaultGitHub === null){
    setNewGitHub(null);
  }
}, [defaultGitHub]);

useEffect(() => {
  if (defaultLikedin !== null) {
    setNewLikedin(defaultLikedin);
  }else if (defaultLikedin === null){
    setNewLikedin(null);
  }
}, [defaultLikedin]);

useEffect(() => {
  if (defaultImg !== null) {
    setNewImg(defaultImg);
  }else if (defaultImg === null){
    setNewImg(null);
  }
}, [defaultImg]);

useEffect(() => {
  if (defaultBackground !== null) {
    setNewBackground(defaultBackground);
  }else if (defaultBackground === null){
    setNewBackground(null);
  }
}, [defaultBackground]);

useEffect(() => {
  if (defaultRole !== null) {
    setNewRole(defaultRole);
  }else if (defaultRole === null){
    setNewRole(null);
  }
}, [defaultRole]);

useEffect(() => {
  if (defaultAge !== null) {
    setNewAge(defaultAge);
  }
}, [defaultAge]);

useEffect(() => {
  let fechaFormato = new Date(defaultBirthday);
  let nuevoFormato = fechaFormato.toISOString().split('T')[0];

  if (defaultBirthday !== null) {
    setNewBirthday(nuevoFormato);
  }else if (defaultBirthday === null){
    setNewBirthday(null);
  }
}, [defaultBirthday]);

  useEffect(() => {
    const fetchCountries = async () => {
      const countries = await getCountries();
      setCountries(countries);
    };
  
    fetchCountries();
  }, []);

  useEffect(() => {
    const fetchLanguages = async () => {
      const languages = await getLanguages(token);
      setLanguages(languages);
    };
  
    fetchLanguages();
  }, []);

  const handleLanguageSelection = (event, values) => {
    const idsSelect = values.map((option) => option.id);
    const selectedNames = values.map((option) => option.label);

    setSelectedLanguages(idsSelect);
    setSelectedNameLanguages(selectedNames);
  };

  //Funcion del miniModal
  const handleClose = () => {
    if (defaultName === newName &&
        defaultLastName === newLastName &&
        defaultAge === newAge &&
        defaultCountryName === selectedCountry &&
        defaultBio === newBio &&
        defaultGitHub === newGitHub &&
        defaultLikedin === newLikedin &&
        defaultImg === newImg &&
        defaultBackground === newBackground &&
        defaultRole === newRole &&
        JSON.stringify(defaultLanguageProfiles) === JSON.stringify(selectedNameLanguages)
        ){
        onClose();
    } else {
      setShowMiniModal(true);
    }
  };

  const handleMiniModalClose = () => {
    setShowMiniModal(false);
  };

  const handleDiscardChanges = () => {
    setNewName(defaultName);
    setNewLastName(defaultLastName);
    setNewAge(defaultAge);
    setSelectedCountry(defaultCountryName);
    setNewBio(defaultBio);
    setNewGitHub(defaultGitHub);
    setNewLikedin(defaultLikedin);
    setNewImg(defaultImg);
    setNewBackground(defaultBackground);
    setNewRole(defaultRole);
    setSelectedLanguages([]);
    setSelectedNameLanguages([]);
    onClose();
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
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
              value={newName}
              helperText={isValidName ? '' : 'Invalid name, only letters are allowed'}
              error={!isValidName}
              required
              inputProps={{ style: { textTransform: 'capitalize' } }}
              onChange={handleInputNameChange}
            />

            <TextFields
              id="lastName"
              type="text"
              label="Last Name"
              variant="standard"
              value={newLastName}
              helperText={isValidLastName ? '' : 'Invalid last name, only letters are allowed'}
              error={!isValidLastName}
              required
              inputProps={{ style: { textTransform: 'capitalize' } }}
              onChange={handleInputLastNameChange}
            />
            <Box style={{ display: 'flex' , margin: 15}}>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                  <DatePicker
                    className="customDatePicker"
                    onChange={handleInputAgeChange}
                    renderInput={(props) => (
                      <TextFieldStyled
                        {...props}
                        label="Date of Birth"
                        variant="standard"
                        helperText={ageError || ''}
                        error={Boolean(ageError)}
                        required
                        sx={{ mt: 2 }}
                      />
                    )}
                  />
                </DemoContainer>
              </LocalizationProvider>

              <TextFieldStyled
                id="age"
                label="Age"
                variant="standard"
                value={newAge ? newAge.toString() : ""}
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
              value={selectedCountry}
              onChange={handleInputCountryChange}
              renderInput={(params) => <TextFieldStyled {...params} label="Country"variant="standard" required/>}
            />
            
            <Box className="multiline">
              <TextField
                id="outlined-multiline-static"
                label="Bio"
                multiline
                rows={4}
                value={newBio}
                helperText={isValidBio? '' : 'Invalid bio'}
                error={!isValidBio}
                onChange={handleInputBioChange}
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
              value={newGitHub}
              helperText={isValidGitHub ? '' : 'Invalid GitHub url, use the address https://github.com/'}
              error={!isValidGitHub}
              required
              inputProps={{ style: { textTransform: "capitalize" } }}
              onChange={handleInputGitHubChange}
            />

            <TextFields
              id="likedin"
              type="text"
              label="LinkedIn"
              variant="standard"
              value={newLikedin}
              helperText={isValidLikedin ? '' : 'Invalid LikedIn url, use the address https://linkedin.com/in/'}
              error={!isValidLikedin}
              required
              inputProps={{ style: { textTransform: 'capitalize' } }}
              onChange={handleInputLikedInChange}
            />

            <TextFields
              id="img"
              type="text"
              label="Profile Image"
              variant="standard"
              value={newImg}
              helperText={isValidImg ? '' : 'Invalid url for image'}
              error={!isValidImg}
              required
              inputProps={{ style: { textTransform: 'capitalize' } }}
              onChange={handleInputImgChange}
            />

            <TextFields
              id="background"
              type="text"
              label="Background Image"
              variant="standard"
              value={newBackground}
              helperText={isValidBackground ? '' : 'Invalid url for image'}
              error={!isValidBackground}
              required
              inputProps={{ style: { textTransform: 'capitalize' } }}
              onChange={handleInputBackgroundChange}
            />

            <TextFields
              id="role"
              type="text"
              label="Role"
              variant="standard"
              value={newRole}
              helperText={isValidRole ? '' : 'Invalid role, only letters are allowed'}
              error={!isValidRole}
              required
              inputProps={{ style: { textTransform: 'capitalize' } }}
              onChange={handleInputRoleChange}
            />

            <LanguagesAutocomplete
              multiple
              id="tags-standard"
              options={languages}
              getOptionLabel={(option) => option.label}
              defaultValue={selectedLanguages}
              renderTags={(value, getTagProps) =>
                value.map((option) => (
                  <Chip
                    label={option.label}
                    {...getTagProps({ index: option.id })}
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
              onChange={handleLanguageSelection}
            />

          </Box>
          <div className='button-container'>
            <Button
              type="button"
              className='custom-button'
              onClick={handleSubmmit}
              sx={{ color: 'white',backgroundColor: '#E63946',":hover":{backgroundColor:'#1D3557' } }} 
            > 
              Guardar 
            </Button>
          </div>
        </Box>
      </Modal>
      {showMiniModal && (
          <MiniModal open={showMiniModal} onClose={handleMiniModalClose} onDiscardChanges={handleDiscardChanges} />
        )}
    </>
  );
};

export default ModalProfile;

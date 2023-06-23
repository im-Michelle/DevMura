import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { colors } from "../../../ui/colors";
import "./modalGroups.css";
import TextFields from '../../TextFields/TextField';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const ModalGroup = ({ open, onClose }) => {
    // valores de los inputs
    const [name, setName] = useState("");
   
    // validadores de los inputs
  const [isValidName, setIsValidName] = useState(true);
 
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

  //Form
  const handleActiveButton = () => {
    if (
      isValidName 
    ) {
      setButtonActive(true);
    } else {
      setButtonActive(true);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    //console.log(formValues);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box className="modal-containerG"  sx={{p: 4}}>
        <div id='title'>
          <h3 id="parent-modal-title" style={{ color: colors.lightBlue }}>Create group</h3>
        </div>
        <Box className="form">
          <TextFields
            id="name"
            type="text"
            label="Name of group"
            variant="standard"
            value={name}
            helperText={isValidName ? '' : 'Invalid name'}
            error={!isValidName}
            required
            inputProps={{ style: { textTransform: 'capitalize' } }}
            onChange={handleInputNameChange}
          />
          <Box className="multiline">
            <TextField
              id="outlined-multiline-static"
              label="Bio"
              multiline
              rows={4}
              defaultValue="Description here"
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
        </Box>
        <div className='button-container'>
          <Button
            type="button"
            className='custom-button'
            sx={{ color: 'white',backgroundColor: '#E63946',":hover":{backgroundColor:'#1D3557' } }} 
          > 
            Crear 
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default ModalGroup;

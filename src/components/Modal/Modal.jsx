import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';
import { colors } from "../../ui/colors";
import "./modal.css";

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

const ModalProfile = ({ open, onClose }) => {
  const [name, setName] = useState('');
  const [isValidName, setIsValidName] = useState(true);

  const handleInputNameChange = (e) => {
    const inputValue = e.target.value;
    const regeName = /^[A-Za-záéíóúüñÁÉÍÓÚÜÑ]+(?: [A-Za-záéíóúüñÁÉÍÓÚÜÑ]+)*$/;
    if (
      inputValue.length < 3 ||
      inputValue.length > 50 ||
      !inputValue.match(regeName)
    ) {
      setIsValidName(false);
    } else {
      setIsValidName(true);
    }
    setName(inputValue);
  };

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
        <p id="parent-modal-description" style={{ color: colors.lightBlue }}>Basic Information</p>

        <TextFieldStyled
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
      </Box>
    </Modal>
  );
};

export default ModalProfile;

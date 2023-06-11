import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { colors } from "../../../ui/colors";
import "./modalSignUp.css";
import CustomButton from "../../../components/Button/index";

const ModalSignUp = ({ open, onClose }) => {

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box className="modal-containerL"  sx={{p: 2}}>
        <div id='titleL'>
          <h3 id="parent-modal-title" style={{ color: colors.lightBlue , textAlign:'center'}}>¡Usuario registrado!</h3>
        </div>
        <div id='buttonL'>
            <CustomButton onClick={'#'} backgrdColor={colors.new}>Join Now</CustomButton>
        </div> 
      </Box>
    </Modal>
  );
};

export default ModalSignUp;

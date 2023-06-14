import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { colors } from "../../../ui/colors";
import "./modalChanges.css";
import CustomButton from "../../../components/Button/index";

const ModalChanges = ({ openMessage, onCloseMessage }) => {

  return (
    <Modal
      open={openMessage}
      onClose={onCloseMessage}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box className="modal-containerC"  sx={{p: 2}}>
        <div id='titleC'>
          <h3 id="parent-modal-title" style={{ color: colors.lightBlue , textAlign:'center'}}>¡Usuario registrado!</h3>
        </div>
        <div id='buttonC'>
            <CustomButton onClick={'#'} backgrdColor={colors.new}>Join Now</CustomButton>
        </div> 
      </Box>
    </Modal>
  );
};

export default ModalChanges;

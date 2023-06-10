import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { colors } from "../../ui/colors";
import "./modal.css";



const ModalProfile = ({ open, onClose }) => {
    return (
        <Modal
          open={open}
          onClose={onClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box 
            sx={{ 
                position: 'absolute', 
                top: '50%', 
                left: '50%', 
                transform: 'translate(-50%, -50%)', 
                bgcolor: `${colors.new}`, 
                border: '2px solid #000', 
                boxShadow: 24, 
                p: 4 
              }}
            >
            
            <div id='title'>
                <h3 id="parent-modal-title"  style={{color: `${colors.lightBlue}`}}> Edit profile </h3>
            </div>
            <p id="parent-modal-description" style={{color: `${colors.lightBlue}`}}> Basic Information </p>
          </Box>
        
        </Modal>
      );
};

export default ModalProfile;

import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { colors } from "../../../ui/colors";
import "./modalSignUp.css";
import Button from "@mui/material/Button";
import CheckIcon from '@mui/icons-material/Check';
//import { useHistory } from 'react-router-dom'; 
import { Link as LinkReactRouter } from "react-router-dom";


const ModalSignUp = ({ open, onClose }) => {

  /* const history = useHistory();

  const handleLogin = () => {
    history.push('/sign-in');
  }; */
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box className="modal-containerS"  sx={{p: 2}}>
        <div id='circle'> 
          <CheckIcon className="icon" style={{ fontSize: '4rem'}}/>
        </div>
        <div id='titleS'>
          <h2 id="parent-modal-title" style={{ color: '#50715A', textAlign:'center'}}>¡User register!</h2>
          <p style={{textAlign: 'center'}}> Your user is register now, you can login </p>
        </div>
        <div id='buttonS'>
          <LinkReactRouter to="/sign-in">
            <Button
              variant="contained"
              sx={{ backgroundColor: '#E63946', ":hover": { backgroundColor: '#1D3557' } }}
            >
              Sign in
            </Button>
          </LinkReactRouter>
        </div> 
      </Box>
    </Modal>
  );
};

export default ModalSignUp;

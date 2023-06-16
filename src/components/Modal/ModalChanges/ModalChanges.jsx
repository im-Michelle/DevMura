import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import { colors } from "../../../ui/colors";
import "./modalChanges.css";

//console.log("minimodal");

const ModalChanges = ({ open, onClose, onDiscardChanges }) => {
  const handleDiscardAndClose = () => {
    onDiscardChanges();
    onClose();
  };
  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box className="modal-containerM"  sx={{p: 2}}>
          <div id='titleM'>
            <h5 id="parent-modal-title" style={{ color: colors.lightBlue , textAlign:'center'}}>Discard Changes</h5>
          </div>
          <div id="ask">
            <p style={{ color: colors.primaryText , textAlign:'center'}}> Are you sure that you want to eliminate changes? </p>
          </div>
          <div id="buttons">
            <Button
                variant="contained"
                type="submit"
                onClick={onClose}
                sx={{ backgroundColor:'#E63946',":hover":{backgroundColor:'#1D3557' }, borderRadius: '10%'}} 
              >
                No, thanks
              </Button>
              <Button
                variant="contained"
                type="submit"
                onClick={handleDiscardAndClose}
                sx={{ backgroundColor:'#E63946',":hover":{backgroundColor:'#1D3557' }, borderRadius: '10%',  marginLeft: '15px' }} 
              >
                Discard
              </Button>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default ModalChanges;

import React, { useState } from 'react';
import '../TextFields/textfield.css';
import { TextField } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

export const TextFields = ({ typeInput, helper }) => {



  return (
    <>
      <p >
        User: 
      </p>
      <Grid container spacing={3}>
        <Grid xs={12} md={4} xl={4} className="textfieldGrid" >
          <TextField
            id="filled-error-helper-text"
            type={typeInput}
            label="Email"
            variant="filled"
            helperText={helper}
            fullWidth
            required
            className="textfields"
          />
        </Grid>
      </Grid>


    </>
  )
}

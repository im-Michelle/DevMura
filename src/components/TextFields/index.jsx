import React, { useState } from 'react';
import '../TextFields/textfield.css';
import { TextField } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

const TextFields = ({ typeInput, helper, label }) => {




  return (
    <>
      
      <Grid container spacing={3}>
        <Grid xs={12} md={10} xl={10} className="textfieldGrid" >
          <TextField
            id="filled-error-helper-text"
            type={typeInput}
            label={label}
            variant="filled"
            helperText={helper}
            fullWidth
            required
            className="textfields"
            style={{marginTop: 30, marginBottom: "auto"}}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default TextFields;
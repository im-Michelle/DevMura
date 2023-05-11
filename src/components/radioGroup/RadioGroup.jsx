import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


export const DevRadioGroup = ({
    options,
    defaultValue,
    handleChange,
    radioLabel
}) => {
  return (
    <>
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">{radioLabel}</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={defaultValue}
                name="radio-buttons-group"
                onChange={handleChange}
            >
                {options && options.map((option,idx) => (
                    <FormControlLabel key={idx} value={option.value} control={<Radio />} label={option.label} />
                ))}
            </RadioGroup>
        </FormControl>
    </>
  )
}

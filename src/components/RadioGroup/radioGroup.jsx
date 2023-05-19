import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { colors } from "../../ui/colors";


export const DevRadioGroup = ({
    options,
    defaultValue,
    handleChange,
    radioLabel,
    orientation,
    color

}) => {
  return (
    <>
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label"  style={{ color: colors.primaryText }}>{radioLabel}</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={defaultValue}
                name="radio-buttons-group"
                onChange={handleChange}
                sx={{ 
                    flexDirection: orientation === 'horizontal' ? 'row' : 'column'}}
            >
                {options && options.map((option,idx) => (
                    <FormControlLabel 
                        key={idx} 
                        value={option.value} 
                        control={<Radio style={{ color: colors.primaryText }} />} 
                        label={option.label}
                        style={{ color: colors.primaryText }}
                    />
                ))}
            </RadioGroup>
        </FormControl>
    </>
  )
}


             /*  Para usar el Radiogroup podemos copiamos el siguiente bloque, 
              modificando como queramos los valores de las props*/

              {/* <DevRadioGroup
                radioLabel="Gender"
                defaultValue="other"
                orientation="horizontal"
                options={[
                  {
                    value: "Female",
                    label: "female"
                  },
                  {
                    value: "some",
                    label: "XXYX"
                  },
                  {
                    value: "other",
                    label: "YYXY"
                  }
                ]}
              /> */}
              
             

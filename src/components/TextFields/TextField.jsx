import React from "react";
import styled from "@emotion/styled";
import { colors } from "../../ui/colors";
import TextField from "@mui/material/TextField";
import { IconButton, InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import "./textfield.css"

const TextFieldStyled = styled(TextField)`
  margin-bottom: 10px;
  input {
    color: ${colors.primaryText};
    margin: 3px;
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
    color: ${colors.vibrantBlue};
  }
  .MuiInputLabel-root.Mui-focused {
    color: ${colors.lightBlue}; 
  }
`;

const TextFields = (props) => {
  const { showPassword, setShowPassword, ...rest } = props;

  const inputAdornment = (
    <InputAdornment position="end">
      <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
  );

  return <TextFieldStyled className="text-field-styled" {...rest} InputProps={rest.type === "password" ? { endAdornment: inputAdornment } : {}} />;
};

export default TextFields;

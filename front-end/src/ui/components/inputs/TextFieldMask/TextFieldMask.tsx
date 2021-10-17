import React from "react";
import TextField from "ui/components/inputs/TextField/TextField";
import InputMask from "react-input-mask";
import { OutlinedTextFieldProps } from "@mui/material";

export interface TextFieldProps extends OutlinedTextFieldProps {
  mask: string;
  value: string;
}
const TextFieldMask: React.FC<TextFieldProps> = ({
  mask,
  value,
  onChange,
  ...props
}) => {
  return (
    <InputMask mask={mask} value={value} onChange={onChange}>
      {() => {
        return <TextField {...props} />;
      }}
    </InputMask>
  );
};

export default TextFieldMask;

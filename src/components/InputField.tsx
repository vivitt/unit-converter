import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface IProps {
  // numberToConvert: string;
  // setNumberToConvert: React.Dispatch<React.SetStateAction<string>>;
  type: string;
  readonly: boolean;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  // setError: React.Dispatch<React.SetStateAction<string>>;
  // setResult: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<IProps> = ({
  // numberToConvert,
  // setNumberToConvert,
  type,
  readonly,
  value,
  setValue,
}) => {
  return (
    <TextField
      sx={{ width: "100px" }}
      id="numberToConverInput"
      variant="outlined"
      value={value}
      // placeholder="0"
      InputProps={{ readOnly: readonly }}
      type={type}
      size="small"
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
};

export default InputField;

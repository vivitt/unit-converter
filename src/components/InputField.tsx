import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface IProps {
  numberToConvert: string;
  setNumberToConvert: React.Dispatch<React.SetStateAction<string>>;

  // setError: React.Dispatch<React.SetStateAction<string>>;
  // setResult: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<IProps> = ({
  numberToConvert,
  setNumberToConvert,
}) => {
  return (
    <TextField
      sx={{ width: "100px" }}
      id="numberToConverInput"
      variant="outlined"
      value={numberToConvert}
      placeholder="0"
      type="number"
      onChange={(e) => {
        setNumberToConvert(e.target.value);
      }}
    />
  );
};

export default InputField;

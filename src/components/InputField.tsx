import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface IProps {
  numberToConvert: string;
  setNumberToConvert: React.Dispatch<React.SetStateAction<string>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
  setResult: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<IProps> = ({
  numberToConvert,
  setNumberToConvert,
  setError,
  setResult,
}) => {
  return (
    <TextField
      id="numberToConverInput"
      variant="outlined"
      value={numberToConvert}
      onChange={(e) => {
        setNumberToConvert(e.target.value);
        setError("");
        setResult("");
      }}
    />
  );
};

export default InputField;

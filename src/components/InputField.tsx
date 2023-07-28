import * as React from "react";

import TextField from "@mui/material/TextField";

interface IProps {
  type: string;
  readonly: boolean;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}
const InputField: React.FC<IProps> = ({ type, readonly, value, setValue }) => {
  return (
    <TextField
      sx={{
        width: "100px",
        margin: "3px",
        backgroundColor: "white",
        borderRadius: "4px",
      }}
      inputProps={{ "data-testid": type }}
      id={type}
      color="primary"
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

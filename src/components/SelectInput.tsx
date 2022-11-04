import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { IUnit } from "../units/unit";

import { units } from "../units/unit";
import { findMultiplier } from "../converter";

interface IProps {
  conversionType: string;
  options: IUnit[];
  direction: string;
  state: IUnit;
  setState: React.Dispatch<React.SetStateAction<IUnit>>;
  isDisabled: boolean;
}

const SelectInput: React.FC<IProps> = ({
  conversionType,
  options,
  direction,
  setState,
  state,
  isDisabled,
}: IProps) => {
  const [unit, setUnit] = useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
    setUnit(event.target.value as string);
    setState({
      resourceName: event.target.value,
      multiplier: findMultiplier(conversionType, units, event.target.value),
    });
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth disabled={isDisabled}>
        <InputLabel htmlFor={direction} size="small">
          {direction}
        </InputLabel>
        <Select
          label={direction}
          labelId={direction}
          inputProps={{ "data-testid": direction }}
          id={direction}
          value={state.resourceName}
          onChange={handleChange}
          size="small"
        >
          {options.map((u) => (
            <MenuItem value={u.resourceName}>{u.resourceName}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectInput;

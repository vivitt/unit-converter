import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { IUnit } from "../units/unit";
import { IUnitGroup } from "../units/unit";
import { units } from "../units/unit";
import { findMultiplier } from "../converter";

interface IProps {
  conversionType: string;
  options: IUnit[];
  direction: string;
  state: IUnit;
  setState: React.Dispatch<React.SetStateAction<IUnit>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
  setResult: React.Dispatch<React.SetStateAction<string>>;
}

const SelectInput: React.FC<IProps> = ({
  conversionType,
  options,
  direction,
  setState,
  state,
  setError,
  setResult,
}: IProps) => {
  const [unit, setUnit] = useState<string>("");

  useEffect(() => {
    setState({
      resourceName: unit,
      multiplier: state.multiplier,
    });
  }, [unit]);

  const handleChange = (event: SelectChangeEvent) => {
    setUnit(event.target.value as string);
    setError("");
    setResult("");
    setState({
      resourceName: unit,
      multiplier: findMultiplier(conversionType, units, unit),
    });
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id={conversionType}>{direction}</InputLabel>
        <Select
          labelId={direction}
          id={direction}
          value={state.resourceName}
          label={direction}
          onChange={handleChange}
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

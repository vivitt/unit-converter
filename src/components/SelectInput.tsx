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
}

const SelectInput: React.FC<IProps> = ({
  conversionType,
  options,
  direction,
  setState,
  state,
}: IProps) => {
  const [unit, setUnit] = useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
    setUnit(event.target.value as string);

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
          defaultValue={options[0].resourceName}
          id={direction}
          value={unit}
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

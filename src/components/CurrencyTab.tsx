import React, { ReactNode } from "react";
import { useState } from "react";
import axios, { Axios } from "axios";
import { useEffect } from "react";
import Button from "@mui/material/Button";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

interface IProps {
  isDisabled: boolean;
  getArrowIcon: () => ReactNode;
  handleSwap: () => void;
}

type Currency = {
  [key: string]: string;
};

type GetCurrencyResponse = {
  data: Currency[];
};

const CurrencyTab: React.FC<IProps> = ({
  getArrowIcon,
  handleSwap,
  isDisabled,
}: IProps) => {
  const [options, setOptions] = useState<Currency>();

  const [from, setFrom] = useState<string>("");

  const [to, setTo] = useState<string>("");

  const [disableTo, setDisableTo] = useState<boolean>(true);
  const [numberToConvert, setNumberToConvert] = useState<string>("");
  const [result, setResult] = useState<string>("-");

  const getCurrencies = () => {
    try {
      const data = axios.get<GetCurrencyResponse>(
        "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json"
      );
      setOptions(data);
      console.log(options);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
        return error.message;
      } else {
        console.log("unexpected error: ", error);
        return "An unexpected error occurred";
      }
    }
  };

  useEffect(() => {
    getCurrencies();
  }, []);

  useEffect(() => {
    if (from !== "") {
      setDisableTo(false);
    }
  }, [from]);

  return (
    <>
      <div className="converter__title">
        <h1>Currency</h1>
        <h4>Unit Converter</h4>
      </div>
      <div className="converter__form">
        <div className="converter__input">
          <TextField
            sx={{ width: "100px", margin: "3px" }}
            inputProps={{ "data-testid": "currency" }}
            id="currency"
            variant="outlined"
            value={numberToConvert}
            // placeholder="0"
            InputProps={{ readOnly: false }}
            type="currency"
            size="small"
            onChange={(e) => {
              setNumberToConvert(e.target.value);
            }}
          />
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel htmlFor="From" size="small">
                From
              </InputLabel>
              <Select
                label="from"
                labelId="from"
                inputProps={{ "data-testid": "from" }}
                id="from"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
                size="small"
              >
                {/* {options.map((i: string) => (
                  <MenuItem value={i}>{i}</MenuItem>
                ))} */}
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="converter__equalSign">
          <Button
            variant="text"
            onClick={handleSwap}
            sx={{ color: "white" }}
            data-testid="swapBtn"
          >
            {getArrowIcon()}
          </Button>
        </div>
        <div className="converter__results">
          <TextField
            sx={{ width: "100px", margin: "3px" }}
            inputProps={{ "data-testid": "currency" }}
            id="currency"
            variant="outlined"
            value={to === "" ? "" : result}
            // placeholder="0"
            InputProps={{ readOnly: true }}
            type="currenct"
            size="small"
            onChange={(e) => {
              setResult(e.target.value);
            }}
          />
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth disabled={disableTo}>
              <InputLabel htmlFor="To" size="small">
                To
              </InputLabel>
              <Select
                label="to"
                labelId="to"
                inputProps={{ "data-testid": "to" }}
                id="to"
                value={to}
                onChange={(e) => setTo(e.target.value)}
                size="small"
              >
                {/* {options.map((u) => (
                  <MenuItem value={u}>{u}</MenuItem>
                ))} */}
              </Select>
            </FormControl>
          </Box>
        </div>
      </div>
    </>
  );
};

export default CurrencyTab;

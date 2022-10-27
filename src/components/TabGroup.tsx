import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { units } from "../units/unit";
import { IUnit } from "../units/unit";
import SelectInput from "./SelectInput";
import InputField from "./InputField";
import { useState } from "react";
import Button from "@mui/material/Button";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import FormControl from "@mui/material/FormControl";
import { convert } from "../converter";

const TabGroup: React.FC = () => {
  const [from, setFrom] = useState<IUnit>({ resourceName: "", multiplier: 0 });

  const [to, setTo] = useState<IUnit>({ resourceName: "", multiplier: 0 });

  const [numberToConvert, setNumberToConvert] = useState<string>("");

  const [result, setResult] = useState<string>("");

  const [error, setError] = useState<string>("");

  const handleSwap = (e: React.FormEvent) => {
    e.preventDefault();
    const prev = from;
    setFrom(to);
    setTo(prev);
  };

  const getResult = (e: React.FormEvent): void => {
    e.preventDefault();
    setError("");
    setResult("");
    if (numberToConvert === "") {
      setError(`Please enter a number to be converted!`);
    } else {
      const n = parseInt(numberToConvert);
      if (n === null) {
        setError(`Please enter a valid number to be converted! `);
      } else {
        if (from.resourceName === "") {
          setError(`Please select the units you want to convert from`);
        } else if (to.resourceName === "") {
          setError(`Please select the units you want to convert to`);
        } else {
          setResult(
            `${numberToConvert}${from.resourceName} is ${convert(
              n,
              from.multiplier,
              to.multiplier
            )} ${to.resourceName}`
          );

          setNumberToConvert("");
        }
      }
    }
  };

  return (
    <Tabs>
      <TabList>
        {units.map((u) => (
          <Tab>{u.slug}</Tab>
        ))}
      </TabList>
      {units.map((u) => (
        <TabPanel>
          <div className="converter">
            <FormControl>
              <InputField
                setError={setError}
                numberToConvert={numberToConvert}
                setNumberToConvert={setNumberToConvert}
                setResult={setResult}
              />
            </FormControl>

            <div className="form__selects">
              <FormControl>
                <SelectInput
                  conversionType={u.slug}
                  options={u.units}
                  direction="From"
                  state={from}
                  setState={setFrom}
                  setError={setError}
                  setResult={setResult}
                ></SelectInput>
              </FormControl>
              <Button variant="outlined" onClick={handleSwap}>
                <SwapHorizIcon></SwapHorizIcon>
              </Button>
              <FormControl>
                <SelectInput
                  conversionType={u.slug}
                  options={u.units}
                  direction="To"
                  state={to}
                  setState={setTo}
                  setError={setError}
                  setResult={setResult}
                ></SelectInput>
              </FormControl>
              <Button variant="outlined" onClick={getResult}>
                Convert
              </Button>
            </div>

            <div className="form__results"></div>
            {error !== "" ? <p>{error}</p> : <p> {result}</p>}
          </div>
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default TabGroup;

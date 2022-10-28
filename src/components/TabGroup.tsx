import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { units } from "../units/unit";
import { IUnit } from "../units/unit";
import SelectInput from "./SelectInput";
import InputField from "./InputField";
import { useState, useEffect } from "react";
import { findMultiplier } from "../converter";
import Button from "@mui/material/Button";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import FormControl from "@mui/material/FormControl";
import { convert } from "../converter";

const TabGroup: React.FC = () => {
  const [from, setFrom] = useState<IUnit>({
    resourceName: "",
    multiplier: 0,
  });

  const [to, setTo] = useState<IUnit>({
    resourceName: "",
    multiplier: 0,
  });
  const [disableTo, setDisableTo] = useState<boolean>(true);
  const [numberToConvert, setNumberToConvert] = useState<string>("");

  const [result, setResult] = useState<string>("0");

  const [error, setError] = useState<string>("");

  // const handleSwap = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const prev = from;
  //   setFrom(to);
  //   setTo(prev);
  // };

  const getResult = (a: string): string => {
    const n = parseInt(a);
    console.log(n, from.multiplier, to.multiplier);
    return convert(n, from.multiplier, to.multiplier);
  };
  useEffect(() => {
    if (from.resourceName !== "") {
      setDisableTo(false);
    }
  }, [from]);

  useEffect(() => {
    setResult(getResult(numberToConvert));
    console.log(result);
  }, [to, from, numberToConvert]);

  return (
    <Tabs>
      <TabList>
        {units.map((u) => (
          <Tab>{u.emoji}</Tab>
        ))}
      </TabList>
      {units.map((u) => (
        <TabPanel>
          <div className="title">
            <h2>{u.slug}</h2>
          </div>
          <div className="converter">
            <div className="converter__input">
              <InputField
                numberToConvert={numberToConvert}
                setNumberToConvert={setNumberToConvert}
              />

              <SelectInput
                conversionType={u.slug}
                options={u.units}
                direction="From"
                state={from}
                setState={setFrom}
                isDisabled={false}
              ></SelectInput>
            </div>
            <div className="converter__units">
              <span>
                <p>
                  {to.multiplier} {to.resourceName}
                </p>
                <p>-----------------</p>
                <p>
                  {from.multiplier} {from.resourceName}
                </p>
              </span>
            </div>
            <div className="converter__equalSign">
              <span>
                <h1>=</h1>
              </span>
            </div>
            <div className="converter__results">
              <p>{result}</p>
              <SelectInput
                conversionType={u.slug}
                options={u.units}
                direction="To"
                state={to}
                setState={setTo}
                isDisabled={disableTo}
              ></SelectInput>
            </div>
          </div>
          {/* <Button variant="outlined" onClick={handleSwap}>
              <SwapHorizIcon></SwapHorizIcon>
            </Button> */}
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default TabGroup;

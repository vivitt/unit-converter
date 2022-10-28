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

  const [numberToConvert, setNumberToConvert] = useState<string>("hol");

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
    setResult(getResult(numberToConvert));
    console.log(result);
  }, [to]);

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
            <div className="form">
              {/* <InputField
                numberToConvert={numberToConvert}
                setNumberToConvert={setNumberToConvert}
              /> */}
              <input
                type="number"
                value={numberToConvert}
                placeholder="0"
                onChange={(e) => {
                  setNumberToConvert(e.target.value);
                }}
              ></input>
              <select
                value={from.resourceName}
                onChange={(e) => {
                  let n = e.target.value;
                  setFrom({
                    resourceName: n,
                    multiplier: findMultiplier(u.slug, units, n),
                  });
                }}
                placeholder="From"
              >
                {u.units.map((o) => (
                  <option value={o.resourceName}>{o.resourceName}</option>
                ))}
              </select>
              {/* <SelectInput
                conversionType={u.slug}
                options={u.units}
                direction="From"
                state={from}
                setState={setFrom}
              ></SelectInput> */}
              <span>
                <p>
                  {to.multiplier} {to.resourceName}
                </p>
                <p>-----------------</p>
                <p>
                  {from.multiplier} {from.resourceName}
                </p>
              </span>
              <span>
                <h4>=</h4>
              </span>
              <p>{result}</p>
              <select
                value={to.resourceName}
                onChange={(e) => {
                  let n = e.target.value;
                  setTo({
                    resourceName: n,
                    multiplier: findMultiplier(u.slug, units, n),
                  });
                }}
                defaultValue={1}
              >
                {u.units.map((o) => (
                  <option value={o.resourceName}>{o.resourceName}</option>
                ))}
              </select>
            </div>
            {/* <Button variant="outlined" onClick={handleSwap}>
              <SwapHorizIcon></SwapHorizIcon>
            </Button> */}
          </div>
        </TabPanel>
      ))}
    </Tabs>
  );
};

export default TabGroup;

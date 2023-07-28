import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { units } from "../units/unit";
import { IUnit } from "../units/unit";
import SelectInput from "./SelectInput";
import InputField from "./InputField";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import { getResult } from "../converter";

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
  const [result, setResult] = useState<string>("-");

  const handleNavigateTabs = () => {
    setResult("-");
    setTo({
      resourceName: "",
      multiplier: 0,
    });
    setFrom({
      resourceName: "",
      multiplier: 0,
    });
  };

  const handleSwap = () => {
    const prev = { ...from };
    setFrom({ ...to });
    setTo({ ...prev });
  };

  useEffect(() => {
    if (from.resourceName !== "") {
      setDisableTo(false);
    }
  }, [from]);

  const getArrowIcon = () => {
    if (window.innerWidth >= 576) {
      return <SwapHorizIcon data-testid="hor"></SwapHorizIcon>;
    } else {
      return <SwapVertIcon data-testid="ver"></SwapVertIcon>;
    }
  };

  useEffect(() => {
    setResult(getResult(numberToConvert, from.multiplier, to.multiplier));
  }, [to, from, numberToConvert]);

  return (
    <div className="converter">
      <Tabs>
        <TabList style={{ border: "none", margin: 0, zIndex: 0 }}>
          {units.map((u) => (
            <Tab
              key={u.slug}
              style={{
                borderTop: "solid 1px black",
                borderRadius: "5px 5px 0 0 ",
              }}
              onClick={() => handleNavigateTabs()}
            >
              {u.emoji}
            </Tab>
          ))}
        </TabList>
        {units.map((u) => (
          <TabPanel
            style={{
              border: "solid 1px black",
              borderRadius: "10px",
              zIndex: 10,
            }}
          >
            <div className="converter__title">
              <h1>{u.slug[0].toUpperCase() + u.slug.substring(1)}</h1>
              <h4>Unit Converter</h4>
            </div>
            <div className="converter__form">
              <div className="converter__input">
                <InputField
                  value={numberToConvert}
                  setValue={setNumberToConvert}
                  type="number"
                  readonly={false}
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
                <InputField
                  value={to.resourceName === "" ? "" : result}
                  setValue={setResult}
                  type="text"
                  readonly={true}
                />
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
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default TabGroup;

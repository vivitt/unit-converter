import React from "react";
import Footer from "./components/Footer";
import Box from "@mui/material/Box";
import "./App.scss";

import TabGroup from "./components/TabGroup";

const App: React.FC = () => {
  return (
    <div className="App">
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexFlow: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span className="heading">Unit Converter</span>
        <TabGroup />
        {/* <Converter /> */}
      </Box>

      <Footer></Footer>
    </div>
  );
};

export default App;

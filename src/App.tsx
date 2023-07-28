import React, { useState } from "react";
import Footer from "./components/Footer";
import Box from "@mui/material/Box";
import "./styles/App.scss";

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
        <TabGroup />
      </Box>

      <Footer />
    </div>
  );
};

export default App;

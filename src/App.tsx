import React, { useState } from "react";
import Footer from "./components/Footer";
import Box from "@mui/material/Box";
import "./styles/App.scss";

import TabGroup from "./components/TabGroup";

const App: React.FC = () => {
  const [color, setColor] = useState<string>("#F0D1FF");
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
        <TabGroup setColor={setColor} />
      </Box>

      <Footer color={color} />
    </div>
  );
};

export default App;

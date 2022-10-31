import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
const Footer: React.FC = () => {
  return (
    <Box sx={{ width: "100%", position: "absolute", bottom: "0" }}>
      <div>
        <p>
          <Link
            color="secondary"
            href="https://github.com/Rviewer-Challenges/uGVtM3PdS45c4PdTPLKU"
            target="blank"
          >
            <GitHubIcon fontSize="small"></GitHubIcon>About Unit Converter
          </Link>
        </p>
      </div>
      <div>
        <p>© Viviana Yanez 2022 | Made with ♥︎</p>
      </div>
    </Box>
  );
};

export default Footer;

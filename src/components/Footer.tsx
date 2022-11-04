import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
interface IProps {
  color: string;
}

const Footer: React.FC<IProps> = ({ color }) => {
  return (
    <Box
      sx={{
        width: "100%",
        position: "absolute",
        bottom: "0",
        backgroundColor: color,
      }}
    >
      <div className="footer">
        <p className="footer__link">
          <Link
            color="secondary"
            href="https://github.com/Rviewer-Challenges/uGVtM3PdS45c4PdTPLKU"
            target="blank"
          >
            <GitHubIcon fontSize="small"></GitHubIcon>Unit Converter
          </Link>
        </p>

        <div className="footer__text">
          <p>© Viviana Yanez 2022 | Made with ♥︎</p>
        </div>
      </div>
    </Box>
  );
};

export default Footer;

import React from "react";
import { Container, Typography } from "@mui/material";

import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <footer>
        <Container>
          <Typography textAlign="center">
            &copy; {new Date().getFullYear()} - All rights reserved | Developed
            by{" "}
            <a
              href="https://github.com/MTAlamIndia"
              target="_blank"
              rel="noreferrer"
            >
              M T Alam
            </a>
          </Typography>
        </Container>
      </footer>
    </>
  );
};

export default Footer;

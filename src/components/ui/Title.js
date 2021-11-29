import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

import "./Title.scss";

const Title = ({ title }) => {
  return (
    <>
      <Box className="title">
        <Typography variant="h4">{title}</Typography>
      </Box>
    </>
  );
};

export default Title;

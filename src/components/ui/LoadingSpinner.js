import React from "react";
import { Box } from "@mui/system";
import { CircularProgress } from "@mui/material";

const LoadingSpinner = () => {
  return (
    <>
      <Box style={{ color: "#f03333", padding: "1rem 0" }} textAlign="center">
        <CircularProgress color="inherit" />
      </Box>
    </>
  );
};

export default LoadingSpinner;

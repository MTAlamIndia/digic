import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import HeaderCategories from "./HeaderCategories";
import HeaderNavigations from "./HeaderNavigations";
import { FaShippingFast } from "react-icons/fa";

import "./HeaderBottom.scss";

const HeaderBottom = () => {
  return (
    <>
      <Box className="header__bottom">
        <Container>
          <Box className="header__bottom-wrapper">
            <Grid container alignItems="center">
              <Grid item xs={6} md={3}>
                <HeaderCategories />
              </Grid>
              <Grid item xs={6} md={6}>
                <HeaderNavigations />
              </Grid>
              <Grid item sx={{ display: { xs: "none", md: "block" } }} md={3}>
                <Box className="header__bottom--notice">
                  <FaShippingFast />
                  <Typography variant="body2" component="span">
                    Free Shipping on Orders $300
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default HeaderBottom;

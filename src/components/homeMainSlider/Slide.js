import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Slide = ({ image, heading, link }) => {
  return (
    <>
      <Box style={{ background: `url(${image})` }} className="slide">
        <Container>
          <Grid container>
            <Grid item sx={{ display: { xs: "none", md: "block" } }} md={3} />
            <Grid item xs={12} md={3}>
              <Box className="slide__content">
                <Typography variant="h2">{heading}</Typography>
                <Link to={link}>
                  Learn More <IoIosArrowDroprightCircle />
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Slide;

import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDroprightCircle } from "react-icons/io";

import "./ProductLayoutOne.scss";

const ProductLayoutOne = ({ image, link, subtitle, title }) => {
  return (
    <>
      <Link to={link} className="product__layout--one">
        <Box className="image__wrapper">
          <img src={image} alt={title} />
        </Box>
        <Box className="content__wrapper">
          <Typography variant="h4">{subtitle}</Typography>
          <Typography variant="h2">{title}</Typography>
          <Typography variant="body2" component="span">
            Shop now <IoIosArrowDroprightCircle />
          </Typography>
        </Box>
      </Link>
    </>
  );
};

export default ProductLayoutOne;

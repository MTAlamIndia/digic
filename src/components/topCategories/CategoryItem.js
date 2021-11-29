import React from "react";
import { ListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { navCategory } from "../../store/navigations";

import "./CategoryItem.scss";

const CategoryItem = ({ title }) => {
  return (
    <>
      <ListItem className="category__item">
        <Link to={`${navCategory}${title}`}>
          <Box className="image">
            <img src={`./images/${title}.jpg`} alt={title} />
          </Box>
          <Typography>{title}</Typography>
        </Link>
      </ListItem>
    </>
  );
};

export default CategoryItem;

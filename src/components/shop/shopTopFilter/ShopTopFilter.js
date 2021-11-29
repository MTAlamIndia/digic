import { Box } from "@mui/system";
import FilterProductQuantity from "./FilterProductQuantity";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

import ProductSorting from "./ProductSorting";

import "./ShopTopFilter.scss";
import { useSelector } from "react-redux";

const ShopTopFilter = () => {
  const { category } = useParams();

  const { filterCategory } = useSelector((state) => state.filterReducer);
  return (
    <>
      {category && (
        <Box className="category__results">
          <Typography className="title">
            {filterCategory === "all"
              ? `${filterCategory} categories`
              : filterCategory}
          </Typography>
        </Box>
      )}
      <Box className="shop__top__filter">
        <Box>
          <FilterProductQuantity />
        </Box>
        <Box>
          <ProductSorting />
        </Box>
      </Box>
    </>
  );
};

export default ShopTopFilter;

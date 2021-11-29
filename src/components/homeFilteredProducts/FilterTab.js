import { useEffect } from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  getFilteredCategory,
  getFilteredProducts,
} from "../../store/filterSlice";

import "./FilterTab.scss";

const FilterTab = ({ category }) => {
  const dispatch = useDispatch();
  const { filteredCategory } = useSelector((state) => state.filterReducer);

  useEffect(() => {
    dispatch(getFilteredProducts());
  }, [filteredCategory, dispatch]);
  return (
    <>
      <Button
        className={
          filteredCategory === category ? "filter__tab active" : "filter__tab"
        }
        onClick={() => dispatch(getFilteredCategory(category))}
      >
        {category}
      </Button>
    </>
  );
};

export default FilterTab;

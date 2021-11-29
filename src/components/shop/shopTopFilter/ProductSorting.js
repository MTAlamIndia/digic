import { useSelector, useDispatch } from "react-redux";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import { getSorting } from "../../../store/filterSlice";

const ProductSorting = () => {
  const dispatch = useDispatch();
  const { sorting } = useSelector((state) => state.filterReducer);

  const handleChange = (e) => {
    dispatch(getSorting(e.target.value));
  };
  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="sort-product">Sort</InputLabel>
        <Select
          labelId="sort-product"
          id="sort-product-autowidth"
          value={sorting}
          onChange={handleChange}
          autoWidth
          label="Sort"
          name="sorting"
        >
          <MenuItem value={"default"}>Default sorting</MenuItem>
          <MenuItem value={"latest"}>Sort by latest</MenuItem>
          <MenuItem value={"price_inc"}>Sort by price: low to high</MenuItem>
          <MenuItem value={"price_dec"}>Sort by price: high to low</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default ProductSorting;

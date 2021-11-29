import { useEffect } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { getProductsPerPage } from "../../../store/filterSlice";

const FilterProductQuantity = () => {
  const dispatch = useDispatch();
  const { productsPerPage } = useSelector((state) => state.filterReducer);

  const peoductsperPageNumber = [8, 12, 16];
  const defaultPerPage = peoductsperPageNumber[0];

  const handleChange = (e) => {
    dispatch(getProductsPerPage(e.target.value));
  };

  useEffect(() => {
    dispatch(getProductsPerPage(defaultPerPage));
  }, [defaultPerPage, dispatch]);

  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="filter-product-quantity">Show</InputLabel>
        <Select
          labelId="filter-product-quantity"
          id="filter-product-quantity-autowidth"
          value={productsPerPage}
          onChange={handleChange}
          autoWidth
          label="Show"
          name="productsPerPage"
        >
          {peoductsperPageNumber?.map((item, i) => (
            <MenuItem key={i} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default FilterProductQuantity;

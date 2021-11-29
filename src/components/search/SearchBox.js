import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, FormControl, Input, MenuItem, Select } from "@mui/material";
import { BiSearchAlt2 } from "react-icons/bi";

import {
  getSearchCategory,
  getSearchTerm,
  getSearchResults,
  activateSearch,
  deactivateSearch,
} from "../../store/searchSlice";

import SearchResult from "./SearchResult";

import "./SearchBox.scss";

const SearchBox = () => {
  const dispatch = useDispatch();
  const ref = useRef();

  const { categories } = useSelector((state) => state.productsReducer);
  const { isSearchActive, searchTerm, searchCategory } = useSelector(
    (state) => state.searchReducer
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      dispatch(getSearchResults(searchTerm));
      dispatch(activateSearch());
    }
  };
  const categoryList = ["all", ...categories];

  const searchTermHandler = (e) => {
    const { value } = e.target;

    dispatch(getSearchTerm(value));

    if (value) {
      dispatch(getSearchResults(value));
      dispatch(activateSearch());
    } else {
      dispatch(deactivateSearch());
    }
  };

  const searchCategoryHandler = (e) => {
    dispatch(getSearchCategory(e.target.value));
    if (searchTerm) {
      dispatch(getSearchResults(searchTerm));
      dispatch(activateSearch());
    }
  };

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isSearchActive && ref.current && !ref.current.contains(e.target)) {
        dispatch(deactivateSearch());
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isSearchActive, dispatch]);

  return (
    <>
      <form className="search__box" onSubmit={handleSubmit} ref={ref}>
        <FormControl className="search__box--input">
          <Input
            type="text"
            placeholder="Search product..."
            value={searchTerm}
            onChange={searchTermHandler}
          />
        </FormControl>
        <FormControl className="search__box--select" variant="standard">
          <Select
            name="searchCategory"
            onChange={searchCategoryHandler}
            value={searchCategory}
          >
            {categoryList.map((category, i) => (
              <MenuItem key={i} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button type="submit">
          <BiSearchAlt2 />
        </Button>

        <SearchResult />
      </form>
    </>
  );
};

export default SearchBox;

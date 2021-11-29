import { List, ListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { navShop } from "../../store/navigations";
import { deactivateSearch, getSearchTerm } from "../../store/searchSlice";

const SearchResult = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { isSearchActive, searchResults } = useSelector(
    (state) => state.searchReducer
  );

  const redirectHandler = (url) => {
    dispatch(deactivateSearch());
    dispatch(getSearchTerm(""));
    history.push(url);
  };

  return (
    <>
      {isSearchActive && (
        <Box className="search__result">
          {searchResults?.length > 0 && (
            <List>
              {searchResults?.map((product) => (
                <ListItem
                  key={product?.id}
                  onClick={() => redirectHandler(`${navShop}${product?.slug}`)}
                >
                  <Box className="search_result_item">
                    <img src={product?.images[0]} alt={product?.title} />
                    <Typography>{product?.title}</Typography>
                  </Box>
                </ListItem>
              ))}
            </List>
          )}

          {searchResults?.length === 0 && (
            <Typography textAlign="center" py={5}>
              No Product Found
            </Typography>
          )}
        </Box>
      )}
    </>
  );
};

export default SearchResult;

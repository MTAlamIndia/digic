import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/system";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import {
  Button,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

import { Link } from "react-router-dom";
import { navCategory } from "../../../store/navigations";
import { toggleCategoriesList } from "../../../store/categoryListSlice";

import "./HeaderCategories.scss";

const HeaderCategories = () => {
  const dispatch = useDispatch();

  const { isCategoryListActive } = useSelector(
    (state) => state.categoryListReducer
  );

  const { categories } = useSelector((state) => state.productsReducer);

  const handleDisplayCategory = () => {
    dispatch(toggleCategoriesList());
  };
  return (
    <>
      <Box className="header__bottom--categories">
        <Button onClick={handleDisplayCategory}>
          <RiBarChartHorizontalFill />
          <Typography variant="body2" component="span">
            All Categories
          </Typography>
          {isCategoryListActive ? (
            <MdOutlineKeyboardArrowUp />
          ) : (
            <MdOutlineKeyboardArrowDown />
          )}
        </Button>
        {isCategoryListActive && (
          <Box className="header__bottom--categories--list">
            <List>
              {categories.map((category, i) => (
                <ListItem key={i}>
                  <ListItemButton>
                    <Link
                      to={`${navCategory}${category}`}
                      onClick={handleDisplayCategory}
                    >
                      {category}
                    </Link>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        )}
      </Box>
    </>
  );
};

export default HeaderCategories;

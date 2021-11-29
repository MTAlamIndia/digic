import { useDispatch, useSelector } from "react-redux";
import { List, ListItem, Typography } from "@mui/material";

import { useHistory, useParams } from "react-router-dom";
import { navCategory } from "../../store/navigations";

import {
  getFilteredCategory,
  getFilteredProducts,
} from "../../store/filterSlice";

import "./CategoryWidget.scss";

const CategoryWidget = () => {
  const dispatch = useDispatch();

  const { categories, products } = useSelector(
    (state) => state.productsReducer
  );
  const { filteredCategory } = useSelector((state) => state.filterReducer);

  const { category } = useParams();
  const history = useHistory();

  const categoryList = ["all", ...categories];

  const handleClick = (item) => {
    dispatch(getFilteredCategory(item));
    dispatch(getFilteredProducts(item));
    if (category) {
      history.push(`${navCategory}${item}`);
    }
  };

  return (
    <>
      <Typography className="title">categories</Typography>
      <List className="sidebar__widget--content category">
        {categoryList.map((item, i) => (
          <ListItem
            key={i}
            onClick={() => handleClick(item)}
            className={filteredCategory === item ? "active" : null}
          >
            {item === "all" ? "all categories" : item}
            <Typography component="span">
              {` (${
                products.filter((product) => {
                  if (item === "all") return products;
                  return product?.category?.includes(item);
                }).length
              })`}
            </Typography>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default CategoryWidget;

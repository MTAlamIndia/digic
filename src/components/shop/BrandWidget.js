import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  List,
  ListItem,
  Typography,
} from "@mui/material";

import "./BrandWidget.scss";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredBrands } from "../../store/filterSlice";

const BrandWidget = () => {
  const dispatch = useDispatch();

  const { brands } = useSelector((state) => state.productsReducer);
  const { filteredBrands } = useSelector((state) => state.filterReducer);

  const handlefilterBrands = (e) => {
    const { checked, name } = e.target;

    dispatch(
      getFilteredBrands({
        name,
        checked,
      })
    );
  };

  return (
    <>
      <Typography className="title">brands</Typography>
      <List className="sidebar__widget--content brand">
        {brands.map((item, i) => (
          <ListItem key={i}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={filteredBrands.includes(item) || false}
                    onChange={handlefilterBrands}
                    name={item}
                  />
                }
                label={item}
              />
            </FormGroup>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default BrandWidget;

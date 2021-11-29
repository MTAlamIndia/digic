import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/system";
import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";
import { getPrice } from "../../store/productsSlice";

import "./PriceWidget.scss";

const PriceWidget = () => {
  const dispatch = useDispatch();

  const { price, minPrice, maxPrice } = useSelector(
    (state) => state.productsReducer
  );

  const handleChange = (e) => {
    dispatch(getPrice(e.target.value));
  };

  return (
    <>
      <Typography className="title">price</Typography>
      <Box className="sidebar__widget--content price">
        <Slider
          value={price}
          onChange={handleChange}
          valueLabelDisplay="auto"
          name="price"
          min={minPrice}
          max={maxPrice}
        />
        <Typography>
          Range:{" "}
          <Typography component="span">
            ${minPrice} - ${price}
          </Typography>
        </Typography>
      </Box>
    </>
  );
};

export default PriceWidget;

import { Box } from "@mui/system";
import { BsBag } from "react-icons/bs";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleMiniCart } from "../../store/cartSlice";

const CartIcon = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cartReducer);

  const NUmberOfItems = cartItems?.reduce((curNum, item) => {
    return curNum + item.quantity;
  }, 0);

  return (
    <>
      <Box className="icon" onClick={() => dispatch(toggleMiniCart())}>
        <BsBag />
        <Typography variant="body2" component="span">
          {NUmberOfItems}
        </Typography>
      </Box>
    </>
  );
};

export default CartIcon;

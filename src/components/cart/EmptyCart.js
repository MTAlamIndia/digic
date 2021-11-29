import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deactivateCart } from "../../store/cartSlice";
import { navShop } from "../../store/navigations";

const EmptyCart = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Box className="empty__cart">
        <Typography sx={{ textAlign: "center" }}>Cart is empty</Typography>
        <Link
          to={navShop}
          className="redirect__button"
          onClick={() => dispatch(deactivateCart())}
        >
          Browse Products
        </Link>
      </Box>
    </>
  );
};

export default EmptyCart;

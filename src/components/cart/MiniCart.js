import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import {
  deactivateCart,
  toggleMiniCart,
  updateTotalCartAmount,
} from "../../store/cartSlice";

import CartHasItems from "./CartHasItems";

import "./MiniCart.scss";
import EmptyCart from "./EmptyCart";
import { useHistory } from "react-router-dom";
import { navCart } from "../../store/navigations";

const MiniCart = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  const history = useHistory();

  const { cartItems, isMiniCartActive, totalCartAmount } = useSelector(
    (state) => state.cartReducer
  );

  useEffect(() => {
    dispatch(updateTotalCartAmount());
  }, [cartItems, dispatch]);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isMiniCartActive && ref.current && !ref.current.contains(e.target)) {
        dispatch(toggleMiniCart());
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isMiniCartActive, dispatch]);

  const redirectHandler = () => {
    history.push(navCart);
    dispatch(deactivateCart());
  };

  return (
    <>
      <Box
        className={`${isMiniCartActive ? "mini__cart active" : "mini__cart"}`}
        ref={ref}
      >
        {cartItems && cartItems.length > 0 ? (
          <>
            <CartHasItems />{" "}
            <Box className="mini__cart--total">
              <Typography>Total:</Typography>
              <Typography className="total__amount">
                ${totalCartAmount}
              </Typography>
            </Box>
            <Box onClick={redirectHandler} className="redirect__button">
              Browse Cart
            </Box>
          </>
        ) : (
          <EmptyCart />
        )}
      </Box>
    </>
  );
};

export default MiniCart;

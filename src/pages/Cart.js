import { Container } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import CartSections from "../components/cart/CartSections";
import EmptyCart from "../components/cart/EmptyCart";
import BannerBreadcrumb from "../components/ui/BannerBreadcrumb";
import { deactivateCategoriesList } from "../store/categoryListSlice";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cartReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(deactivateCategoriesList());
  }, [dispatch]);

  return (
    <>
      <BannerBreadcrumb pageTitle="cart" links={[{ name: "cart" }]} />
      <Container>
        <Box sx={{ paddingTop: 5, paddingBottom: 5 }}>
          {cartItems && cartItems.length > 0 ? <CartSections /> : <EmptyCart />}
        </Box>
      </Container>
    </>
  );
};

export default Cart;

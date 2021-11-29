import { useSelector } from "react-redux";
import { List } from "@mui/material";

import CartItem from "./CartItem";

const CartHasItems = () => {
  const { cartItems } = useSelector((state) => state.cartReducer);

  return (
    <>
      <List>
        {cartItems.map((product) => (
          <CartItem key={product.id} {...product} />
        ))}
      </List>
    </>
  );
};

export default CartHasItems;

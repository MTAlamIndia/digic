import { Button, ListItem, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { RiCloseLine } from "react-icons/ri";
import UpdateQuantity from "../ui/UpdateQuantity";

import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/cartSlice";

import "./CartItem.scss";

const MiniCartItem = ({ id, images, title, price, onSellPrice, quantity }) => {
  const dispatch = useDispatch();

  const productPrice = onSellPrice ? onSellPrice : price;
  return (
    <>
      <ListItem className="cart__item">
        <Box className="image">
          <img src={images[0]} alt="title" />
        </Box>
        <Box className="title--price">
          <Typography className="title">{title}</Typography>
          <Typography className="price">${productPrice}</Typography>
        </Box>
        <UpdateQuantity quantity={quantity} id={id} />
        <Typography className="subtotal">
          ${(productPrice * quantity).toFixed(2)}
        </Typography>
        <Button
          className="remove__cart__item"
          onClick={() => dispatch(removeFromCart({ id, clearAll: true }))}
        >
          <RiCloseLine />
        </Button>
      </ListItem>
    </>
  );
};

export default MiniCartItem;

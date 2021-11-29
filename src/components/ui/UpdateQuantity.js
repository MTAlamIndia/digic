import React, { useState } from "react";
import { Button, Input, Typography } from "@mui/material";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import { Box } from "@mui/system";
import { BsBag } from "react-icons/bs";

import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../store/cartSlice";

import "./UpdateQuantity.scss";

const UpdateQuantity = ({ quantity, id, productDetailForm }) => {
  const dispatch = useDispatch();
  const [qtyValue, setQtyValue] = useState(quantity || 1);

  const handleChange = (e) => {
    const val = +e.target.value;
    if (val < 1) {
      return;
    } else if (val > 10) {
      return;
    }
    setQtyValue(val);
  };

  const handleDecreaseQuantity = () => {
    if (qtyValue <= 1) return;

    setQtyValue((prev) => prev - 1);
  };

  const handleIncreaseQuantity = () => {
    if (qtyValue >= 10) return;

    setQtyValue((prev) => prev + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form className="update__quantity" onSubmit={handleSubmit}>
        {!productDetailForm && (
          <>
            <Button onClick={() => dispatch(removeFromCart({ id }))}>
              <AiOutlineMinus />
            </Button>
            <Typography component="span">{quantity}</Typography>

            <Button onClick={() => dispatch(addToCart({ id }))}>
              <AiOutlinePlus />
            </Button>
          </>
        )}

        {productDetailForm && (
          <>
            <Box className="quantity__control">
              <Button onClick={handleDecreaseQuantity}>
                <AiOutlineMinus />
              </Button>
              <Input type="number" onChange={handleChange} value={qtyValue} />
              <Button onClick={handleIncreaseQuantity}>
                <AiOutlinePlus />
              </Button>
            </Box>
            <Box className="quantity__submit__buttons">
              <Button
                onClick={() => dispatch(addToCart({ id, qty: qtyValue }))}
              >
                <BsBag />
                Add to Cart
              </Button>
            </Box>
          </>
        )}
      </form>
    </>
  );
};

export default UpdateQuantity;

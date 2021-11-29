import {
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateTotalAmount } from "../../store/cartSlice";
import Title from "../ui/Title";
import CartHasItems from "./CartHasItems";

import "./CartSection.scss";

const CartSections = () => {
  const dispatch = useDispatch();
  const { totalCartAmount, totalAmount } = useSelector(
    (state) => state.cartReducer
  );
  const [shippingCharges, setShippingCharges] = useState(0);

  const handleTotalAmount = (e) => {
    setShippingCharges(e.target.value);
    dispatch(updateTotalAmount(e.target.value));
  };

  useEffect(() => {
    dispatch(updateTotalAmount(shippingCharges));
  }, [totalCartAmount, shippingCharges, dispatch]);

  return (
    <>
      <Grid container spacing={5}>
        <Grid item md={8}>
          <CartHasItems />
        </Grid>
        <Grid item md={4}>
          <Box className="cart__total__section">
            <Title title="cart toals" />
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>SubTotal</TableCell>
                  <TableCell>
                    <Typography variant="h5">${totalCartAmount}</Typography>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Shipping</TableCell>
                  <TableCell>
                    <FormControl
                      component="fieldset"
                      onChange={handleTotalAmount}
                    >
                      <RadioGroup
                        aria-label="gender"
                        defaultValue="female"
                        name="radio-buttons-group"
                      >
                        <FormControlLabel
                          value="0"
                          control={<Radio />}
                          label="Free Shipping"
                        />
                        <FormControlLabel
                          value="4"
                          control={<Radio />}
                          label="Flat Rate"
                        />
                      </RadioGroup>
                    </FormControl>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Total</TableCell>
                  <TableCell>
                    <Typography variant="h5">
                      <strong>${totalAmount}</strong>
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default CartSections;

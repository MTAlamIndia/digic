import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const addToCart = createAsyncThunk(
  "cartSlice/addToCart",
  async (item, { getState }) => {
    const { products } = getState().productsReducer;
    const itmToBeAdded = products.find((product) => product.id === item?.id);

    return {
      itemId: item?.id,
      itemQty: item?.qty || 1,
      itmToBeAdded,
    };
  }
);

const initialState = {
  cartItems: [],
  isMiniCartActive: false,
  totalCartAmount: 0,
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    toggleMiniCart(state) {
      state.isMiniCartActive = !state.isMiniCartActive;
    },

    deactivateCart(state) {
      state.isMiniCartActive = false;
    },

    removeFromCart(state, { payload }) {
      // get index of the product to be removed from the cart
      const productIndex = state.cartItems.findIndex(
        (product) => product.id === payload?.id
      );
      //product to be removed from the cart
      let productToBeRemoved = state.cartItems[productIndex];

      // update cart
      let updatedCart;

      if (!payload?.clearAll) {
        if (productToBeRemoved.quantity === 1) {
          // if the item has only 1 quantity
          updatedCart = state.cartItems.filter(
            (product) => product.id !== payload?.id
          );
        } else {
          // if the item hase more than one quantity, decrease the quantity
          productToBeRemoved = {
            ...productToBeRemoved,
            quantity: productToBeRemoved.quantity - 1,
          };
          updatedCart = [...state.cartItems];
          updatedCart[productIndex] = productToBeRemoved;
        }
      }

      if (payload?.clearAll) {
        // if clear All button triggered
        updatedCart = state.cartItems.filter(
          (product) => product.id !== payload?.id
        );
      }

      state.cartItems = updatedCart;
    },

    updateTotalCartAmount(state) {
      let total = 0;
      let totalAmount = state.cartItems
        .map((item) => item)
        .reduce((curNum, item) => {
          let price = item.onSellPrice ? item.onSellPrice : item.price;
          total += price * item.quantity;
          return total;
        }, 0);

      state.totalCartAmount = totalAmount;
    },

    updateTotalAmount(state, { payload }) {
      state.totalAmount = Number(state.totalCartAmount) + Number(payload);
    },
  },
  extraReducers: {
    [addToCart.fulfilled](state, { payload }) {
      const { itemId, itemQty, itmToBeAdded } = payload;

      // check if item already exist in cart
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === itemId
      );
      const existingItem = state.cartItems[existingItemIndex];

      if (existingItem) {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + itemQty,
        };
        state.cartItems[existingItemIndex] = updatedItem;
      } else {
        const updatedItem = {
          ...itmToBeAdded,
          quantity: itemQty,
        };
        state.cartItems.push(updatedItem);
      }
    },
  },
});

export const {
  removeFromCart,
  toggleMiniCart,
  deactivateCart,
  updateTotalCartAmount,
  updateTotalAmount,
} = cartSlice.actions;

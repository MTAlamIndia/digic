import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const addToWishlist = createAsyncThunk(
  "wishlistSlice/addToWishlist",
  async (id, { getState }) => {
    const { products } = getState().productsReducer;
    const itmToBeAdded = products.find((product) => product.id === id);

    return itmToBeAdded;
  }
);

const initialState = {
  wishlistItems: [],
};

export const wishlishSlice = createSlice({
  name: "wishlistSlice",
  initialState,
  reducers: {
    removeFromWishlist(state, { payload }) {
      const updatedList = state.wishlistItems.filter(
        (product) => product.id !== payload
      );
      state.wishlistItems = updatedList;
    },
  },
  extraReducers: {
    [addToWishlist.fulfilled](state, { payload }) {
      state.wishlistItems.push(payload);
    },
  },
});

export const { removeFromWishlist } = wishlishSlice.actions;

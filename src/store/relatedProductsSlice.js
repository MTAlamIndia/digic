import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getRelatedProducts = createAsyncThunk(
  "",
  async ({ category, id }, { getState }) => {
    const { products } = getState().productsReducer;
    let tempProducts = products;

    if (category) {
      tempProducts = category.flatMap((cat) =>
        tempProducts.filter((item) => item?.category?.includes(cat))
      );
      tempProducts = [...new Set(tempProducts.filter((item) => item.id))];
      tempProducts = tempProducts.filter((item) => item.id !== id);
    }

    return { tempProducts };
  }
);

const initialState = {
  relatedProducts: [],
};

export const relatedProductsSlice = createSlice({
  name: "relatedProductsSlice",
  initialState,
  extraReducers: {
    [getRelatedProducts.fulfilled](state, { payload }) {
      state.relatedProducts = payload?.tempProducts;
    },
  },
});

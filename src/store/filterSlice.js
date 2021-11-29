const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

export const getFilteredProducts = createAsyncThunk(
  "filterSlice/getFilteredProducts",
  async (fCat, { getState }) => {
    const { products, price } = getState().productsReducer;
    return { products, price };
  }
);

const initialState = {
  filteredProducts: [],
  filteredCategory: "all",
  productsPerPage: 8,
  sorting: "default",
  filteredBrands: [],
};

export const filterSlice = createSlice({
  name: "filterSlice",
  initialState,
  reducers: {
    getFilteredCategory(state, { payload }) {
      state.filteredCategory = payload;
    },
    getProductsPerPage(state, { payload }) {
      state.productsPerPage = payload;
    },
    getSorting(state, { payload }) {
      state.sorting = payload;
    },
    getFilteredBrands(state, { payload }) {
      const { checked, name } = payload;
      if (checked) {
        state.filteredBrands.push(name);
      }
      if (!checked) {
        state.filteredBrands = state.filteredBrands.filter(
          (brand) => brand !== name
        );
      }
    },
  },
  extraReducers: {
    [getFilteredProducts.fulfilled](state, { payload }) {
      const { filteredCategory, filteredBrands, sorting } = state;

      let tempProducts = payload.products;

      if (filteredCategory !== "all") {
        tempProducts = tempProducts.filter((product) =>
          product?.category?.includes(filteredCategory)
        );
      }

      if (!filteredBrands.length < 1) {
        tempProducts = filteredBrands.flatMap((brand) => {
          return tempProducts.filter((product) => product.brand === brand);
        });
      }

      tempProducts = tempProducts.filter(
        (product) =>
          product?.onSellPrice <= payload.price ||
          product?.price <= payload.price
      );

      if (sorting === "latest") {
        tempProducts = tempProducts
          .slice()
          .sort(
            (a, b) =>
              new Date(...a?.updatedAt) ||
              new Date(...a?.createdAt) - new Date(...b?.updatedAt) ||
              new Date(...b?.createdAt)
          );
      }

      if (sorting === "price_inc") {
        tempProducts = tempProducts.slice().sort((a, b) => a?.price - b?.price);
      }

      if (sorting === "price_dec") {
        console.log(tempProducts);
        tempProducts = tempProducts.slice().sort((a, b) => b?.price - a?.price);
      }

      state.filteredProducts = tempProducts;
    },
  },
});

export const {
  getFilteredCategory,
  getProductsPerPage,
  getSorting,
  getFilteredBrands,
} = filterSlice.actions;

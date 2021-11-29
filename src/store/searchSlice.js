import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getSearchResults = createAsyncThunk(
  "searchSlice/getSearchResults",
  async (sTerm, { getState }) => {
    const { products } = getState().productsReducer;

    return {
      products,
      sTerm,
    };
  }
);

const initialState = {
  isSearchActive: false,
  searchTerm: "",
  searchCategory: "all",
  searchResults: [],
};

export const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    activateSearch(state) {
      state.isSearchActive = true;
    },
    deactivateSearch(state) {
      state.isSearchActive = false;
    },
    getSearchTerm(state, { payload }) {
      state.searchTerm = payload;
    },
    getSearchCategory(state, { payload }) {
      state.searchCategory = payload;
    },
  },
  extraReducers: {
    [getSearchResults.pending](state) {
      state.isSearchActive = false;
    },
    [getSearchResults.fulfilled](state, action) {
      const { products, sTerm } = action.payload;
      const { searchCategory } = state;

      if (searchCategory !== "all") {
        const filteredProducts = products?.filter(
          (product) =>
            product?.title?.toLowerCase()?.includes(sTerm?.toLowerCase()) &&
            product?.category?.includes(searchCategory)
        );

        console.log(filteredProducts);

        state.searchResults = filteredProducts;
        return;
      }
      const filteredProducts = products?.filter((product) =>
        product?.title?.toLowerCase()?.includes(sTerm?.toLowerCase())
      );

      state.searchResults = filteredProducts;
    },
    [getSearchResults.rejected](state) {
      state.isSearchActive = false;
    },
  },
});

export const {
  activateSearch,
  deactivateSearch,
  getSearchTerm,
  getSearchCategory,
} = searchSlice.actions;

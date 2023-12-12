import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchItems = createAsyncThunk(
  "products/fetchItemsStatus",
  async (params, { dispatch }) => {
    try {
      const response = await fetch("https://fortniteapi.io/v2/shop?lang=ru", {
        headers: {
          Authorization: "db6f9d93-08a0c602-7b295509-163d7509",
        },
      });
      const data = await response.json();

      return data.shop;
    } catch (error) {
      console.error("Error fetching items:", error);

      throw error;
    }
  }
);

const initialState = {
  items: [],
  loading: true,
  searchTerm: "",
  pageCount: 1,
  currentPage: 1,
  itemsPerPage: 10,

};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
    setSearchs(state, action) {
      state.searchTerm = action.payload;
    },
    setCurrentPage(state, action){
     state.currentPage = action.payload
    }
  
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state, action) => {
        state.status = "loading";
        state.items = [];
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.items = action.payload
        state.status = "success";
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.status = "failed";
        state.items = [];
      });
  },
});

export const { setItems, setSearchs, setPageCount,setCurrentPage } = productsSlice.actions;

export default productsSlice.reducer;

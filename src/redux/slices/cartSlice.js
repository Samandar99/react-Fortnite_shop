import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsProducts: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addProducts: (state, action) => {
      const findAdd = state.itemsProducts.find(
        (obj) => obj.mainId === action.payload.mainId
      );

      if (!findAdd) {
        state.itemsProducts.push(action.payload);
        for (let i = 0; i < state.itemsProducts.length; i++) {
          state.totalPrice =
            state.totalPrice + state.itemsProducts[i].price.regularPrice;
        }
      }
    },
    delProducts: (state, action) => {
      const removeProduct = state.itemsProducts.find(
        (obj) => obj.mainId === action.payload
      );
      
      if(removeProduct){
        state.itemsProducts = state.itemsProducts.filter(
          (obj) => obj.mainId !== action.payload
        );
        
        state.totalPrice -= removeProduct.price.regularPrice


      }
       
    },
  },
});

export const { addProducts, delProducts } = cartSlice.actions;

export default cartSlice.reducer;

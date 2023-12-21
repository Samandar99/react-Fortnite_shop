import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  foreverItems: JSON.parse(localStorage.getItem("forever")) || [],
};





export const foreverSlice = createSlice({
  name: "forever",
  initialState,
  reducers: {
    setForevers(state, action) {
      const findForever = state.foreverItems.find(
        (obj) => obj.mainId === action.payload.mainId
      );
    // console.log(findForever);
      if (findForever) {
        return;
      } else {
        state.foreverItems.push(action.payload);
      }
    },
  },
});

export const { setForevers } = foreverSlice.actions;

export default foreverSlice.reducer;

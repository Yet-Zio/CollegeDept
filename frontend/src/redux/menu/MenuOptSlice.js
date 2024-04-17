import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  RecomendedToolsOptions: 0,
  primaryOptions: 0,
  isWdithLow: true,
  isHover: "",
};
const MenuOptSlice = createSlice({
  name: "MenuStates",
  initialState,
  reducers: {
    change: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});
export default MenuOptSlice.reducer;
export const { change } = MenuOptSlice.actions;

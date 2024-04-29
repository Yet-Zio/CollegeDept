import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    CurrentContent: "",
    SeletedOption:1,
    CurrentPath : "",
    PrimarySideBarEnabled: true,
    onInit: true,
    
};
const DasbBoardOptSlice = createSlice({
  name: "AssocDashBoardStates",
  initialState,
  reducers: {
    DashBoardOptchange: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});
export default DasbBoardOptSlice.reducer;
export const { DashBoardOptchange } = DasbBoardOptSlice.actions;

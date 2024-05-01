import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    
  CurrentRenderData : []
};
const CurrrentViewMoreSlice = createSlice({
  name: "ViewMoreStore",
  initialState,
  reducers: {
    ChangeViewMore: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});
export default CurrrentViewMoreSlice.reducer;
export const { ChangeViewMore } = CurrrentViewMoreSlice.actions;

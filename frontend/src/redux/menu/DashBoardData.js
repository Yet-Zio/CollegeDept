import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    
  StudentSideBarButtons : [],

    StudentProfile:[
        {
          id: 1,
          Title: "Photo",
          content: `https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH`,
        },
        {
          id: 2,
          Title: "Name",
          content: "Bijo Prasad",
        },
        {
          id: 2,
          Title: "Register Number",
          content: "2342341234",
        },
        {
          id: 3,
          Title: "EmailAddress",
          content: "GayBijo@gmail.com",
        },
        {
          id: 4,
          Title: "Department",
          content: "BSC Computer Science",
        },
        {
          id: 5,
          Title: "DOB",
          content: "23/23/2333",
        }
      ]
};
const DashBoardData = createSlice({
  name: "DashBoardStates",
  initialState,
  reducers: {
    ChangeDashData: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});
export default DashBoardData.reducer;
export const { ChangeDashData } = DashBoardData.actions;

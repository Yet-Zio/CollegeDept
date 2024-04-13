import {createSlice} from '@reduxjs/toolkit'

const initialState={
    isLogin : false,
    isAssociation : false,
    isContactUs :false,
    isAbout : false,
    isRecomendedTools : false,
    isHover : "",
    isSpring: false,
    isAngular: false,
    isReact: false,
    isLinux: false
}
const MenuOptSlice = createSlice({
    name:"MenuStates",
    initialState,
    reducers:{
        change: (state,action)=>{
            return {
                ...state,
                ...action.payload
              };
        }
    }
})
export default MenuOptSlice.reducer
export const {change} = MenuOptSlice.actions
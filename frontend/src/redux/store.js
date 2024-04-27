import {configureStore} from "@reduxjs/toolkit"
import MenuOptSlice from "./menu/MenuOptSlice"
import DashBoardOptSlice from "./menu/DashBoardOpt"
import DashBoardData from "./menu/DashBoardData"

const store = configureStore({
    reducer:{
        menuOpt: MenuOptSlice,
        DashBoardOpt: DashBoardOptSlice,
        DashBoardDatas: DashBoardData
        
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false ,
      }),
})
export default store
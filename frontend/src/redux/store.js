import {configureStore} from "@reduxjs/toolkit"
import MenuOptSlice from "./menu/MenuOptSlice"

const store = configureStore({
    reducer:{
        menuOpt: MenuOptSlice
    }
})
export default store
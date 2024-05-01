import { configureStore , combineReducers} from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 

import MenuOptSlice from "./menu/MenuOptSlice";
import DashBoardOptSlice from "./menu/DashBoardOpt";
import DashBoardData from "./menu/DashBoardData";
import userReducer from './user/userSlice.js';
import CurrentVIewMoreSlice from "./Association/CurrentVIewMoreSlice.js";


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'], 
  version: 1,
};


const rootReducer = combineReducers({
  menuOpt: MenuOptSlice,
  DashBoardOpt: DashBoardOptSlice,
  DashBoardDatas: DashBoardData,
  user: userReducer,
  ViewMoreStore: CurrentVIewMoreSlice,
})


const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});


const persistedStore = persistStore(store);

export { store, persistedStore };

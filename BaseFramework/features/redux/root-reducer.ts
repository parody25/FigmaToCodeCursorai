import { combineReducers, Reducer } from "@reduxjs/toolkit";
import { persistReducer, PersistConfig } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { authReducer } from "../services";
import { commonReducer } from "../common/index";

const rootPersistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: [],
  blacklist: ["commonReducer"],
};

const commonPersistConfig = {
  key: "commonReducer",
  storage: AsyncStorage,
  blacklist: ["activeSection", "loaders"],
};

const settingsPersistConfig = {
  key: "appSettings",
  storage: AsyncStorage,
  whitelist: ["theme", "lang"],
};

const rootReducer = combineReducers({
  commonReducer: persistReducer(commonPersistConfig, commonReducer),
  authReducer,
});

const persistRootReducer = persistReducer(rootPersistConfig, rootReducer);

export { persistRootReducer };

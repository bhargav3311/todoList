import { createStore, combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { todos } from "./todos/reducers";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
const reducers = {
  todos,
};

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};

const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () =>
  createStore(
    persistedReducer,
    +window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
  );

//window.__REDUX_DEVTOOLD_EXTENSION__ && window.__REDUX_DEVTOOLD_EXTENSION__()  connect our app to redux dev tools

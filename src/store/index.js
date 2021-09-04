import { configureStore } from "@reduxjs/toolkit";
import reducer from "../reducers";
import { loadState,saveState } from "../localStorage";
const preloadedState={
    cart:loadState()
}
const localStorageMiddleware = ({ getState }) => {
    return next => action => {
      const result = next(action);
      // console.log(getState())
      saveState(getState())
      return result;
    };
  }
const store = configureStore({
    reducer,
    preloadedState,
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(localStorageMiddleware)
});
export default store;
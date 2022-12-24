import { combineReducers } from "redux";

import logInReducer from "./logIn/reducer";

const createRootReducers = () =>
  combineReducers({
    logIn: logInReducer,
  });

export default createRootReducers;

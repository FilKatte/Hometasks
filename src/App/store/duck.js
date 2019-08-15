import { combineReducers } from "redux";
import { createAction, handleAction } from "redux-actions";
import * as constants from "./constants";

export const addIApiKey = createAction(constants.ADD_API_KEY);

export const ApiKey = handleAction(
  addIApiKey,
  (state, action) => action.payload,
  null
);

const appReducers = combineReducers({ ApiKey });

export default appReducers;

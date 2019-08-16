import { combineReducers } from "redux";
import { createAction, handleAction } from "redux-actions";
import * as constants from "./constants";

export const addData = createAction(constants.ADD_DATA);

export const data = handleAction(
  addData,
  (state, action) => ({
    ...state,
    name: action.payload.name,
    number: action.payload.number,
    date: action.payload.date,
    cvv: action.payload.cvv
  }),
  { name: null, number: null, date: null, cvv: null }
);

const profileReducers = combineReducers({ data });

export default profileReducers;

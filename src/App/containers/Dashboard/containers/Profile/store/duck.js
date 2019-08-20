import { combineReducers } from "redux";
import { createAction, handleActions } from "redux-actions";
import * as constants from "./constants";

export const addData = createAction(constants.ADD_DATA);
export const updateData = createAction(constants.UPDATE_DATA);

export const data = handleActions(
  new Map([
    [
      addData,
      (state, action) => ({
        ...state,
        name: action.payload.name,
        number: action.payload.number,
        date: action.payload.date,
        cvv: action.payload.cvv,
        updatedData: true
      })
    ],
    [
      updateData,
      state => ({
        ...state,
        updatedData: false
      })
    ]
  ]),
  { name: "Kate", number: "", date: "", cvv: "", updatedData: false }
);

const profileReducers = combineReducers({ data });

export default profileReducers;

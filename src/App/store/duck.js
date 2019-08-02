import { combineReducers } from "redux";
import * as constants from "./constants";

export const increment = () => ({
  type: constants.INCREMENT
});

export const decrement = () => ({
  type: constants.DECREMENT
});

const counter = (state = 0, action) => {
  switch (action.type) {
    case constants.INCREMENT:
      return state + 1;
    case constants.DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const counterSecond = (state = 10, action) => {
  return state;
};

const appReducers = combineReducers({
  counter,
  counterSecond
});

export default appReducers;

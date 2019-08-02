import { combineReducers } from "redux";
import * as constants from "./constants";

export const selectFilm = name => ({
  type: constants.SELECT_FILM,
  payload: name
});

const selectedFilm = (state = "", action) => {
  switch (action.type) {
    case constants.SELECT_FILM:
      return action.payload;
    default:
      return state;
  }
};

const filmReducers = combineReducers({
  selectedFilm
});

export default filmReducers;

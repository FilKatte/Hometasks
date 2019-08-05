import { combineReducers } from "redux";
import * as constants from "./constants";

export const addMessage = message => ({
  type: constants.ADD_MESSAGE,
  payload: message
});

export const removeMessage = id => ({
  type: constants.REMOVE_MESSAGE,
  payload: id
});

const messages = (state = [], action) => {
  switch (action.type) {
    case constants.ADD_MESSAGE:
      return [...state, action.payload];
    case constants.REMOVE_MESSAGE:
      return state.filter(elem => elem.id !== action.payload);
    default:
      return state;
  }
};

const messagesReducer = combineReducers({
  messages
});

export default messagesReducer;

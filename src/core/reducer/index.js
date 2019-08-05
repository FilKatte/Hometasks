import { combineReducers } from "redux";
import appReducers from "../../App/store/duck";
import filmReducer from "../../App/containers/CurrentFilm/store/duck";
import messagesReducer from "../../App/containers/Message/store/duck";

const rootReducer = combineReducers({
  appReducers,
  filmReducer,
  messagesReducer
});

export default rootReducer;

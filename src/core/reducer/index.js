import { combineReducers } from "redux";
import appReducers from "../../App/store/duck";
import filmReducer from "../../App/containers/CurrentFilm/store/duck";

const rootReducer = combineReducers({
  appReducers,
  filmReducer
});

export default rootReducer;

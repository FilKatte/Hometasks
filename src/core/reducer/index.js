import { combineReducers } from "redux";
import appReducers from "../../App/store/duck";
import FilmsListReducer from "../../App/containers/Dashboard/containers/Films/store/duck";

const rootReducer = combineReducers({
  appReducers,
  FilmsListReducer
});

export default rootReducer;

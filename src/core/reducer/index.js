import { combineReducers } from "redux";
import appReducers from "../../App/store/duck";
import searchReducers from "../../App/containers/Search/store/duck";
import showReducers from "../../App/containers/ShowPage/store/duck";

const rootReducer = combineReducers({
  appReducers,
  searchReducers,
  showReducers
});

export default rootReducer;

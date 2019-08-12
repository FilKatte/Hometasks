import { combineReducers } from "redux";
import searchReducers from "../../App/containers/Search/store/duck";
import showReducers from "../../App/containers/ShowPage/store/duck"

const rootReducer = combineReducers({
  searchReducers,
  showReducers
});

export default rootReducer;
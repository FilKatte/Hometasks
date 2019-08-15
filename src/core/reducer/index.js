import { combineReducers } from "redux";
import appReducers from "../../App/store/duck";
import searchReducers from "../../App/containers/Search/store/duck";
import followersReducers from "../../App/containers/Followers/store/duck";

const rootReducer = combineReducers({
  appReducers,
  searchReducers,
  followersReducers
});

export default rootReducer;

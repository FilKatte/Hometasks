import { combineReducers } from "redux";
import appReducers from "../../App/store/duck";
import profileReducers from "../../App/containers/Dashboard/containers/Profile/store/duck";

const rootReducer = combineReducers({
  appReducers,
  profileReducers
});

export default rootReducer;

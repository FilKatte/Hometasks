import { combineReducers } from "redux";
import appReducers from "../../App/store/duck";
import profileReducers from "../../App/containers/Dashboard/containers/Profile/store/duck";
import mapReducers from "../../App/containers/Dashboard/containers/Map/store/duck";

const rootReducer = combineReducers({
  appReducers,
  profileReducers,
  mapReducers
});

export default rootReducer;

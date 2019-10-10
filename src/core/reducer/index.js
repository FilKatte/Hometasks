import { combineReducers } from "redux";
import appReducers from "../../App/store/duck";
import FilmsListReducer from "../../App/containers/Dashboard/containers/Films/store/duck";
import PeopleListReducer from "../../App/containers/Dashboard/containers/People/store/duck";

const rootReducer = combineReducers({
  appReducers,
  FilmsListReducer,
  PeopleListReducer
});

export default rootReducer;

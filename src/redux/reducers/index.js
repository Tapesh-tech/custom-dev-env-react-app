import { combineReducers } from "redux";
import courses from "./courseReducer";

const combinedReducers = combineReducers({
  courses,
});

export default combinedReducers;

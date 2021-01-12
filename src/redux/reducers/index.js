import { combineReducers } from "redux";
import course from "./courseReducer";

const combinedReducers = combineReducers({
  course,
});

export default combinedReducers;

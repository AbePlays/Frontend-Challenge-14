import { combineReducers } from "redux";
import darkModeReducer from "./darkMode";

const allReducers = combineReducers({
  darkMode: darkModeReducer,
});

export default allReducers;

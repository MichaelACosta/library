import { combineReducers } from "redux-immutable";
import library from "./Dashboard/reducer";

export default combineReducers({
  library
});

// Selectors
export const getRouting = state => state.get("routing");

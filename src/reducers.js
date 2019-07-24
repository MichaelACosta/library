import { combineReducers } from "redux-immutable";
import library from "./ListBook/reducer";

export default combineReducers({
  library
});

// Selectors
export const getRouting = state => state.get("routing");

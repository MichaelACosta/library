import { combineReducers } from "redux-immutable";
import library from "./ListBook/reducer";
import status from "./NewBook/reducer";

export default combineReducers({
  library,
  status
});

// Selectors
export const getRouting = state => state.get("routing");

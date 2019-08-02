import { combineReducers } from "redux-immutable";
import * as types from "./types";
import ModelStatus from "./models";

export const stateStatus = (state = ModelStatus(), action) => {
  switch (action.type) {
    case types.SET_STATUS: {
      return state.set("status", action.payload);
    }
    default:
      return state;
  }
};

export default combineReducers({
  stateStatus
});

export const getStatus = state =>
  state.getIn(["status", "stateStatus", "status"]);

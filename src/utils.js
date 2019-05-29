import React from "react";
import { Provider } from "react-redux";
import { Map } from "immutable";
import configureMockStore from "redux-mock-store";

export const makeStore = state => configureMockStore()(Map(state));

export const wrapComponent = (component, store = makeStore()) => (
  <Provider store={store}>{component}</Provider>
);

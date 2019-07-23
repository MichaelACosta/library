import React from "react";
import { Switch, Route } from "react-router-dom";
import List from "./List";
import Insert from "./List/Insert";

const Routes = () =>
  <Switch>
    <Route exact path="/" component={List} />
    <Route exact path="/insert" component={Insert} />
  </Switch>

export default Routes;

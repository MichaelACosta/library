import React from "react";
import { Switch, Route } from "react-router-dom";
import ListBook from "./ListBook";
import NewBook from "./NewBook";
import Login from "./Login";
import SingUp from "./SingUp";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/singup" component={SingUp} />
    <Route exact path="/list" component={ListBook} />
    <Route exact path="/insert" component={NewBook} />
  </Switch>
);

export default Routes;

import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ListBook from "./ListBook";
import NewBook from "./NewBook";
import Login from "./Login";
import SingUp from "./SingUp";
import isAuthenticated from "./auth";

const PrivateRoutes = ({ component: Component, ...rest }) => (
  <Route {...rest} render={
    props => isAuthenticated() ?
      <Component /> :
      <Redirect to={{ pathname: "/", state: { from: props.location } }} />
  }
  />
);

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/singup" component={SingUp} />
    <PrivateRoutes path="/list" component={ListBook} />
    <PrivateRoutes path="/insert" component={NewBook} />
  </Switch>
);

export default Routes;

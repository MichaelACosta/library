import React from "react";
import { Route } from "react-router-dom";
import List from "./List";
import Insert from "./Insert";

const Dashboard = () => (
  <>
    <Route exact path="/" component={List} />
    <Route exact path="/insert" component={Insert} />
  </>
);

export default Dashboard;

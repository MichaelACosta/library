import React from "react";
import "./App.css";
import Header from "./Header";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => (
  <div className="App">
    <Router>
      <Header />
      <div>
        <Route exact path="/" component={Dashboard} />
      </div>
    </Router>
  </div>
);

export default App;

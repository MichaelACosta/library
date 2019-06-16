import React from "react";
import "./App.css";
import Header from "./Header";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => (
  <div className="App">
    <Router>
      <Header />
      <Dashboard />
    </Router>
  </div>
);

export default App;

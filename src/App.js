import React from "react";
import "./App.css";
import Header from "./Header";
import Routes from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => (
  <div className="App">
    <Router>
      <Header />
      <Routes />
    </Router>
  </div>
);

export default App;

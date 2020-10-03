import React from "react";
import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Build from "./Build";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/build">
            <Build />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

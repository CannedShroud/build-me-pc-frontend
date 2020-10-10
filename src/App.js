import React from "react";
import "./Styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Page/Home";
import Build from "./Page/Build";

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

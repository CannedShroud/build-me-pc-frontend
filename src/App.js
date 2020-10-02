import React from "react";
import "./App.css";
import Header from "./Header";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <Header />
      </div>
      <div className="app__body">
        <h1>I am App</h1>
      </div>
    </div>
  );
}

export default App;

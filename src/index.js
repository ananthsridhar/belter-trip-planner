import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Destinations from "./components/MainContainer";

import "./styles.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>BELTER</h1>
        <Route path="/">
          <Destinations />
        </Route>
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

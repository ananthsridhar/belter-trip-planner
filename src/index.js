import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import Destinations from "./components/MainContainer";

import "./styles.css";

function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className="App">
        <h1>BELTER</h1>
        <Route path="/">
          <Destinations />
        </Route>
      </div>
    </Router>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

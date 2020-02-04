import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Sidebar from "react-sidebar";

import { Provider } from "react-redux";
import store from "./store";

import Destinations from "./components/MainContainer";
import SideBarComponent from "./components/sidebar/SideBarComponent"

import "./styles.css";
const mql = window.matchMedia(`(min-width: 800px)`);

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: false
    };
    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }
 
  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged);
  }
 
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
 
  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  }

  render() {
    return (
      <Provider store={store}>
        <Sidebar
          sidebar={<SideBarComponent/>}
          open={this.state.sidebarOpen}
          docked={this.state.sidebarDocked}
          onSetOpen={this.onSetSidebarOpen}
          styles={{ sidebar: { background: "white" } }}
        >
          <Router>
            <div className="App">
              {!this.state.sidebarDocked &&
                <button onClick={() => this.onSetSidebarOpen(true)}>
                  Open sidebar
                </button>
              }
              <h1>BELTER</h1>
              <Route path="/">
                <Destinations />
              </Route>
            </div>
          </Router>
        </Sidebar>
      </Provider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

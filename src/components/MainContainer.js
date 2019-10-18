import React from "react";
import DestCard from "./DestCard";
import DestinationDrawerComponent from "./drawer/DestinationDrawerComponent";

import { Container } from "@material-ui/core";

import AddButtonComponent from "./AddButtonComponent";

import DestinationService from "../services/DestinationService";

export default class Destinations extends React.Component {
  constructor() {
    super();
    this.destinationService = new DestinationService();
    this.state = {
      drawer: false,
      currentDest: -1
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.addDestination = this.addDestination.bind(this);
  }

  componentDidMount() {
    let dests = this.destinationService.getData();
    console.log(dests);
    let self = this;
    fetch("https://www.mocky.io/v2/5da86115120000d0d1edae38")
      .then(res => res.json())
      .then(data => {
        //console.log(data);
        self.setState({
          destinations: data
        });
      })
      .catch(console.error);
    // this.setState({
    //   destinations: this.destinationService.getDestinationsFromService()
    // });
    // console.log(dest);
    // dest.then(data => {
    //   console.log(data);
    //   this.setState({
    //     destinations: data
    //   });
    // });
  }

  toggleDrawer(open, addDest = false, destId) {
    this.setState({
      drawer: open,
      addDest: addDest,
      currentDest: destId ? destId : -1
    });
  }

  addDestination() {
    //console.log("Clicked");
    this.setState({
      drawer: true,
      addDest: true
    });
  }
  onAddDestination(dest) {
    //console.log(dest);
  }

  render() {
    // let match = useRouteMatch();
    let destinations = this.state.destinations ? this.state.destinations : [];
    return (
      <Container maxWidth="lg">
        <div>
          <h2>Destinations</h2>
          {destinations.map(dest => {
            return (
              <div key={dest.id}>
                <DestCard
                  dest={dest}
                  onClick={e => this.toggleDrawer(true, false, dest.id)}
                />
                <AddButtonComponent
                  onClick={() => this.toggleDrawer(true, true, dest.id)}
                />
              </div>
            );
          })}
          {/* <DestCard
            dest={{ name: "Destination1" }}
            destId="22"
            onClick={() => this.toggleDrawer(true)}
          /> */}
          {/* <AddButtonComponent onClick={() => this.toggleDrawer(true, true)} /> */}
          {/* <DestCard destId="22" onClick={() => this.toggleDrawer(true)} /> */}

          <DestinationDrawerComponent
            drawer={this.state.drawer}
            toggleDrawer={this.toggleDrawer}
            addDest={this.state.addDest}
            onAddDestination={this.onAddDestination}
            currentDest={this.state.currentDest}
          />
        </div>
      </Container>
    );
  }
}

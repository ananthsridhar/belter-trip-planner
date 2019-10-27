import React from "react";
import DestCard from "./DestCard";
import DestinationDrawerComponent from "./drawer/DestinationDrawerComponent";

import { Container } from "@material-ui/core";

import { connect } from "react-redux";
import { setDestinations, getAllDestinations } from "../actions/DestinationActions";
import fetchDestinations from "../services/fetchDestinations";

import AddButtonComponent from "./AddButtonComponent";
import DestinationService from "../services/DestinationService";

class Destinations extends React.Component {
  constructor(props) {
    super(props);
    this.destinationService = new DestinationService();
    this.state = {
      drawer: false,
      currentDest: -1,
      destinations: []
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.addDestination = this.addDestination.bind(this);
    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentDidMount() {
    const {fetchDestinations} = this.props;
    fetchDestinations();
    this.setState({
      destinations: this.props.destinations
    })
  }

  //Toggling the Information drawer
  toggleDrawer(open, addDest = false, destId) {
    this.setState({
      drawer: open,
      addDest: addDest,
      currentDest: destId ? destId : -1
    });
  }

  shouldComponentRender() {
    const {pending} = this.props;
    if (this.pending === false) return false;
    // more tests
    return true;
  }


  //TODO : Plug in functionality for when Destination is Added
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
    let destinations = this.props.destinations;
    if (!this.shouldComponentRender()) return (<p>Loading</p>)
    return (
      <Container maxWidth="lg">
        <div>
          <h2>Destinations</h2>
          {destinations.map((dest,index) => {
            console.log(dest.id)
            return (
              <div key={index}>
                <DestCard
                  dest={dest}
                  onClick={e => this.toggleDrawer(true, false, dest.id)}
                />
                <AddButtonComponent
                  onClick={() => this.toggleDrawer(true, true, index)}
                />
              </div>
            );
          })}

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

const mapStateToProps = state => {
  const {destinations, pending} = state;
  return { destinations, pending };
}
export default connect(mapStateToProps, { setDestinations, getAllDestinations, fetchDestinations })(Destinations);
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
      trip: this.props.trips[this.props.currentTrip],
      // destinations: this.props.trip[this.props.currentTrip]._destinations
    })
  }

  //Toggling the Information drawer
  toggleDrawer(open, addDest = false, destId) {
    this.setState({
      drawer: open,
      addDest: addDest,
      currentDest: destId >= 0 ? destId : -1
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
    this.setState({
      drawer: true,
      addDest: true
    });
  }

  render() {
    let trip = this.props.trips[this.props.currentTrip];
    console.log(trip);
    let destinations = trip ? trip.destinations : [];
    if (!this.shouldComponentRender()) return (<p>Loading</p>)
    if (this.props.error) return (<ErrorContainer />)
    return (
      <Container maxWidth="lg">
        <div>
          {this.props.trips.length ? (() => {
            return (
              <React.Fragment>
                <h2>{trip.name}</h2>
                <AddButtonComponent
                  onClick={() => this.toggleDrawer(true, true, 0)}
                />
              </React.Fragment>)
          })() : <h2>You haven't added any trips yet!</h2>
          }
          {!!trip && destinations.map((dest, index) => {
            return (
              <div key={index + 1}>
                <DestCard
                  dest={dest}
                  onClick={e => this.toggleDrawer(true, false, dest.id)}
                />
                <AddButtonComponent
                  onClick={() => this.toggleDrawer(true, true, index + 1)}
                />
              </div>
            );
          })}

          <DestinationDrawerComponent
            drawer={this.state.drawer}
            toggleDrawer={this.toggleDrawer}
            addDest={this.state.addDest}
            currentDest={this.state.currentDest}
          />
        </div>
      </Container>
    );
  }
}

const ErrorContainer = (props) => {
  return (
    <Container maxWidth="lg">
      <p>Error Getting Trip details. Check your network connection</p>
    </Container>
  )
}

const mapStateToProps = state => {
  const {currentTrip, trips, destinations, pending, error} = state;
  return { currentTrip, trips, destinations, pending, error };
}
export default connect(mapStateToProps, { setDestinations, getAllDestinations, fetchDestinations })(Destinations);
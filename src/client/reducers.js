import {
  GET_ALL_DESTINATIONS,
  SET_DESTINATIONS,
  FETCH_TRIPS_PENDING,
  FETCH_DESTINATIONS_SUCCESS,
  FETCH_TRIPS_SUCCESS,
  CHANGE_TRIP,
  FETCH_TRIPS_ERROR,
  ADD_DESTINATION,
  REMOVE_DESTINATION,
  UPDATE_TRIP,
} from './actions/DestinationActions';
import { Trip } from './model/Trip';

const initialState = {
  currentTrip: 0,
  trips: [],
  trip: new Trip(),
  destinations: [],
  pending: false,
  error: null,
  inSync: false,
};

const updateTrip = (state, trip) => {
  let newState = {};
  const i = state.trips.findIndex(t => t._id === trip._id);
  // Existing Trip
  if (i > -1) {
    newState = Object.assign({}, state, {
      trips: state.trips.map((item, index) => (index !== i ? item : trip)),
      inSync: false,
    });
  } else {
    // New Trip
    newState = Object.assign({}, state, {
      trips: [...state.trips, trip],
      inSync: false,
    });
  }
  return newState;
};

const addDestination = (state, action) => {
  const oldDests = state.trips[state.currentTrip]
    ? state.trips[state.currentTrip].destinations
    : [];
  const updatedTrip = Object.assign({}, state.trips[state.currentTrip], {
    destinations: [
      ...oldDests.slice(0, action.position),
      action.destination,
      ...oldDests.slice(action.position),
    ],
  });
  console.log(updatedTrip);
  return updateTrip(state, updatedTrip);
};

const removeDestination = (state, action) => {
  const oldDests = state.trips[state.currentTrip].destinations;
  oldDests.splice(action.position, 1);
  const updatedTrip = Object.assign({}, state.trips[state.currentTrip], {
    destinations: oldDests,
  });
  console.log(updatedTrip);
  return updateTrip(state, updatedTrip);
};

export default function destinationReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case FETCH_TRIPS_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_TRIPS_SUCCESS:
      return action.trips.length
        ? Object.assign({}, state, {
          trips: action.trips,
          trip: action.trips[0],
          destinations: action.trips[0].destinations,
          pending: false,
          inSync: true,
        })
        : state;
    case FETCH_TRIPS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case SET_DESTINATIONS:
      return Object.assign({}, state, {
        trips: [
          {
            destinations: [...state.destinations, action.destinations],
          },
        ],
        trip: {
          destinations: [...state.destinations, action.destinations],
        },
        destinations: [...state.destinations, action.destinations],
      });
    case UPDATE_TRIP:
      return updateTrip(state, action.trip);
    case ADD_DESTINATION:
      return addDestination(state, action);
    case REMOVE_DESTINATION:
      return removeDestination(state, action);
    case GET_ALL_DESTINATIONS:
      return state.destinations;
    case CHANGE_TRIP:
      return Object.assign({}, state, {
        currentTrip: state.trips.findIndex(trip => trip._id === action.tripId),
      });
    default:
      return state;
  }
}

export const getDestinations = state => state.destinations;
export const getDestinationsPending = state => state.pending;
export const getDestinationsError = state => state.error;

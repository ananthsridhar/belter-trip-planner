import {
    GET_DESTINATION, GET_ALL_DESTINATIONS, SET_DESTINATIONS, FETCH_DESTINATIONS_PENDING,
    FETCH_DESTINATIONS_SUCCESS,
    FETCH_TRIPS_SUCCESS,
    FETCH_DESTINATIONS_ERROR, ADD_DESTINATION
} from "./actions/DestinationActions";

import { destinations } from "./mock/mockDestinations";
import {Trip} from "./model/Trip";

const initialState = {
    currentTrip:0,
    trips:[],
    trip:new Trip(),
    destinations: [],
    pending: false,
    error: null
}


export default function destinationReducer(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case FETCH_DESTINATIONS_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_DESTINATIONS_SUCCESS:
            return Object.assign({}, state, {
                trips:[{
                    _destinations: action.destinations,
                }],
                trip:{
                    _destinations: action.destinations,
                },
                destinations: action.destinations,
                pending: false
            });
        case FETCH_TRIPS_SUCCESS:
            console.log(action.trips);
            return Object.assign({}, state, {
                trips:action.trips,
                trip:action.trips[0],
                destinations: action.trips[0].destinations,
                pending: false
            });
        case FETCH_DESTINATIONS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case SET_DESTINATIONS:
            return Object.assign({}, state, {
                trips:[{
                    destinations: [...state.destinations, action.destinations],
                }],
                trip:{
                    destinations: [...state.destinations, action.destinations],
                },
                destinations: [...state.destinations, action.destinations]
            });
        case ADD_DESTINATION:
            return Object.assign({}, state, {
                trips:[{
                    destinations: [...state.destinations.slice(0,action.position),action.destination,...state.destinations.slice(action.position)],
                }],
                trip:{
                    destinations: [...state.destinations.slice(0,action.position),action.destination,...state.destinations.slice(action.position)],
                },
                destinations: [...state.destinations.slice(0,action.position),action.destination,...state.destinations.slice(action.position)]
            });
        case GET_ALL_DESTINATIONS:
            return state.destinations;
        default: return state
    }
}

export const getDestinations = state => state.destinations;
export const getDestinationsPending = state => state.pending;
export const getDestinationsError = state => state.error;
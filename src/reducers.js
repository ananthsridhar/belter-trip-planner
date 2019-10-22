import {
    GET_DESTINATION, GET_ALL_DESTINATIONS, SET_DESTINATIONS, FETCH_DESTINATIONS_PENDING,
    FETCH_DESTINATIONS_SUCCESS,
    FETCH_DESTINATIONS_ERROR
} from "./actions/DestinationActions";

import { destinations } from "./mock/mockDestinations";

const initialState = {
    destinations: [],
    pending: false,
    error: null
}


export default function destinationReducer(state = initialState, action) {
    //console.log(action);
    switch (action.type) {
        case FETCH_DESTINATIONS_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_DESTINATIONS_SUCCESS:
            return Object.assign({}, state, {
                destinations: action.destinations,
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
                destinations: [...state.destinations, action.destinations]
            });
        case GET_ALL_DESTINATIONS:
            return state.destinations;
        default: return state
    }
}

export const getDestinations = state => state.destinations;
export const getDestinationsPending = state => state.pending;
export const getDestinationsError = state => state.error;
export const GET_DESTINATION = 'GET_DESTINATION'; // action types
export const SET_DESTINATIONS = 'SET_DESTINATIONS';
export const GET_ALL_DESTINATIONS = 'GET_ALL_DESTINATION';
export const ADD_DESTINATION='ADD_DESTINATION';

export const FETCH_DESTINATIONS_PENDING = 'FETCH_DESTINATIONS_PENDING';
export const FETCH_DESTINATIONS_SUCCESS = 'FETCH_DESTINATIONS_SUCCESS';
export const FETCH_DESTINATIONS_ERROR = 'FETCH_DESTINATIONS_ERROR';

export function getDestination(id) {
    return {
        type: GET_DESTINATION,
        id
    }
}

export function setDestinations(destinations) {
    return {
        type: SET_DESTINATIONS,
        destinations
    }
}

export function getAllDestinations() {
    return {
        type: GET_ALL_DESTINATIONS
    }
}

export function fetchDestinationsPending() {
    return {
        type: FETCH_DESTINATIONS_PENDING
    }
}

export function fetchDestinationsSuccess(destinations) {
    return {
        type: FETCH_DESTINATIONS_SUCCESS,
        destinations
    }
}

export function fetchDestinationsError(error) {
    return {
        type: FETCH_DESTINATIONS_ERROR,
        error: error
    }
}

export function addDestination(dest,prevPos){
    return {
        type : ADD_DESTINATION,
        position : prevPos,
        destination:dest
    }
}
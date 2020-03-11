import {fetchDestinationsPending,fetchDestinationsSuccess,fetchTripsSuccess,fetchDestinationsError} from "../actions/DestinationActions";


export default function fetchDestinations(){
    return dispatch => {
        dispatch(fetchDestinationsPending());
        // fetch(process.env.DEV_API_ENDPOINT+'/api/trips/getTrips')
        fetch('http://localhost:8080/data/getMock')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            // dispatch(fetchDestinationsSuccess(res));
            console.log(res);
            dispatch(fetchTripsSuccess(res));
            return res;
        })
        .catch(error => {
            dispatch(fetchDestinationsError(error));
        })
    }
}
import {
  fetchTripsPending,
  fetchTripsSuccess,
  fetchTripsError,
} from '../actions/DestinationActions';

export function fetchTrips() {
  return (dispatch) => {
    console.log('Called');
    dispatch(fetchTripsPending());
    // fetch(process.env.DEV_API_ENDPOINT+'/api/trips/getTrips')
    fetch('http://localhost:8080/api/trips')
      .then(res => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        // dispatch(fetchDestinationsSuccess(res));
        console.log(res);
        dispatch(fetchTripsSuccess(res));
        return res;
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchTripsError(error));
      });
  };
}

export function updateTrip(trip) {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(trip),
  };
  return (dispatch) => {
    console.log('Called');
    dispatch(fetchTripsPending());
    // fetch(process.env.DEV_API_ENDPOINT+'/api/trips/getTrips')
    fetch('http://localhost:8080/api/trips/add', requestOptions)
      .then(res => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        // dispatch(fetchDestinationsSuccess(res));
        console.log(res);
        dispatch(fetchTripsSuccess(res));
        return res;
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchTripsError(error));
      });
  };
}

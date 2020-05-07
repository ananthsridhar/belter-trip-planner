import {
  fetchTripsPending,
  fetchTripsSuccess,
  fetchTripsError,
  updateTripSuccess,
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
    fetch('http://localhost:8080/api/trips/update', requestOptions)
      .then(res => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        console.log(res);
        dispatch(updateTripSuccess(res));
        return res;
      })
      .catch((error) => {
        console.log(error);
        dispatch(fetchTripsError(error));
      });
  };
}

/* TODO : Keep function for use in case Syncing Trips wholly doesnt work out
export function addDestination(trip, destination, pos) {
  console.log(destination);
  const oldDests = trip.destinations || [];
  const updatedTrip = Object.assign({}, trip, {
    destinations: [...oldDests.slice(0, pos), destination, ...oldDests.slice(pos)],
  });
  console.log(updatedTrip);
  // updateTrip(updatedTrip);
}
*/

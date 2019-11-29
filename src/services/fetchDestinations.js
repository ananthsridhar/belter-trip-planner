import {fetchDestinationsPending,fetchDestinationsSuccess,fetchDestinationsError} from "../actions/DestinationActions";


export default function fetchDestinations(){
    return dispatch => {
        dispatch(fetchDestinationsPending());
        fetch('http://www.mocky.io/v2/5de0b1b53500008665480d28')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchDestinationsSuccess(res));
            return res.products;
        })
        .catch(error => {
            dispatch(fetchDestinationsError(error));
        })
    }
}
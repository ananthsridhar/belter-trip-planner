import {fetchDestinationsPending,fetchDestinationsSuccess,fetchDestinationsError} from "../actions/DestinationActions";


export default function fetchDestinations(){
    return dispatch => {
        dispatch(fetchDestinationsPending());
        fetch('https://www.mocky.io/v2/5da948373100005d004e0759')
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
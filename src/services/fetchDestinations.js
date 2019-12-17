import {fetchDestinationsPending,fetchDestinationsSuccess,fetchDestinationsError} from "../actions/DestinationActions";


export default function fetchDestinations(){
    return dispatch => {
        dispatch(fetchDestinationsPending());
        fetch(process.env.REACT_APP_MOCK_API)
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
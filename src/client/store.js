import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import destinationReducer from './reducers';

const middlewares = [thunk];

export default createStore(destinationReducer, applyMiddleware(...middlewares));

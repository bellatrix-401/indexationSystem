import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import results from '../reducers/resultsReducer';

const initialState = {};

const reducer = combineReducers ({
  results
});

const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;

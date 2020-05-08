import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import results from '../reducers/resultsReducer';
import navBar from '../reducers/navBarReducer';

const initialState = {};

const reducer = combineReducers ({
  results,
  navBar
});

const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;

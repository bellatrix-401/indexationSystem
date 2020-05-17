import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import results from '../reducers/resultsReducer';
import appInfo from '../reducers/appInfoReducer';

const initialState = {};

const reducer = combineReducers ({
  results,
  appInfo
});

const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;

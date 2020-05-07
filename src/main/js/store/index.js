import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import results from '../reducers/resultsReducer';
import index from '../reducers/indexReducer';

const initialState = {};

const reducer = combineReducers ({
  results,
  index
});

const store = createStore(reducer, initialState, applyMiddleware(thunk));

export default store;

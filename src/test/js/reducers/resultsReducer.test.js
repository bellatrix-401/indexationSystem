import { types } from '../../../main/js/actions/resultsActions';
import reducer from '../../../main/js/reducers/resultsReducer';

const expect = global.expect;
const initialState = {
  urls: []
};

describe('Reducers', () => {
  
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SET_RESULTS', () => {
    let response = Object.assign({}, {
      urls: [{url: 'google.com', id: 1}]
    })

    const app = {
      type: types.SET_RESULTS,
      payload: [{url: 'google.com', id: 1}]
    }

    expect(reducer(initialState, app)).toEqual(response);
  });

  it('should handle SET_DELETE_URL', () => {
    const initial = {
      urls: [{url: 'google.com', id: 1}]
    }

    const app = {
      type: types.SET_DELETE_URL,
      payload: 'google.com'
    }

    const response = {
      urls: []
    }

    expect(reducer(initial, app)).toEqual(response);
  });

  it('should return initial state by default', () => {

    const app = {
      type: 'BY_DEFAULT'
    }

    expect(reducer(initialState, app)).toEqual(initialState);
  });

})
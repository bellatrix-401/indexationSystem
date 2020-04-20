import { types } from '../../../main/js/actions/resultsActions';
import reducer from '../../../main/js/reducers/resultsReducer';

const expect = global.expect;
const payload = {test: "test"};
const initialState = {
  urls: []
};

describe('Reducers', () => {
  
  it('Return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  })

  it('Handle SET_RESULTS', () => {
    let response = Object.assign({}, initialState, {
      urls: payload
    })

    const app = {
      type: types.SET_RESULTS,
      payload
    }

    expect(reducer(initialState, app)).toEqual(response);
  })

  it('Handle SET_DELETE_URL', () => {
    let response = Object.assign({}, initialState, {
      urls: payload,
      urls: []
    })

    const app = {
      type: types.SET_DELETE_URL,
      urls: [],
      payload
    }

    expect(reducer(initialState, app)).toEqual(response);
  })

})
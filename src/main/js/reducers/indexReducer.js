import { types } from '../actions/indexActions';

const initialState = {
  instanceId: ''
};

export default function resultsReducer(state, action) {

  if (typeof state === 'undefined') {
    return initialState;
  }
  const newState = Object.assign({}, state);
  
  switch (action.type) {

    case types.SET_INSTANCE_ID: {
      newState.instanceId = action.payload;
      break;
    }

    default: {
      newState.instanceId = initialState.instanceId;
    }
  }

  return newState;
}
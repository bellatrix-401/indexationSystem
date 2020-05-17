import { types } from '../actions/appInfoActions';

const initialState = {
  instanceId: '',
  version: '',
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

    case types.SET_APP_VERSION: {
      newState.version = action.payload;
      break;
    }

    default: {
      newState.instanceId = state.instanceId;
      newState.version = state.version;
    }
  }

  return newState;
}
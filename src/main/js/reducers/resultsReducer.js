import { types } from '../actions/resultsActions';

const initialState = {
  urls: []
};

export default function resultsReducer(state, action) {

  if (typeof state === 'undefined') {
    return initialState;
  }
  const newState = Object.assign({}, state);
  
  switch (action.type) {

    case types.SET_RESULTS: {
      newState.urls = action.payload;
      break;
    }
    
    case types.SET_DELETE_URL: {
      newState.urls = state.urls.filter(item => item.url !== action.payload)
      break;
    }

    default: {
      newState.urls = initialState;
    }
  }

  return newState;
}




/*

const initialState = {
  urls: []
};

export default function resultsReducer(state = initialState, action) {
  
  switch (action.type) {

    case types.SET_RESULTS:
      return { 
        ...state,
        urls: action.payload
      }
    
    case types.SET_DELETE_URL:
      console.log(action.payload)
      return {
        //...state,
        urls: state.urls.filter(
          item => item.url !== action.payload.url
        )
      }

    
  
    default:
      return { ...state }
  }
}

*/
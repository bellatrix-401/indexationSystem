import { types } from '../actions/resultsActions';

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
      return {
        ...state,
        urls: [...state.urls.filter(item=>item.url!==action.payload.url)]
      }

    
  
    default:
      return { ...state }
  }
}
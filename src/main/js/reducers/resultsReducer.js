import { types } from '../actions/resultsActions';

const initialState = {
  urls: []
};

export default function resultsReducer(state = initialState, action) {
  
  switch (action.type) {

    case types.FIND_RESULTS:
      return { 
        ...state,
        urls: action.payload
      }
    
    case types.DELETE_URL:
      return {
        ...state,
        urls: [...state.urls.filter(item=>item.url!==action.payload)]
      }

    
  
    default:
      return { ...state }
  }
}
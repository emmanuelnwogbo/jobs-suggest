import {
  RENDER_SUGGESTIONS,
  GET_RESULTS
} from './constants';

const initialState = {
  searchvalue: '',
  results: []
}

export const resultsReducer = (state=initialState, action={}) => {
  switch(action.type) {
    case RENDER_SUGGESTIONS:
      return Object.assign({}, state, {
        searchvalue: action.payload
      });
    case GET_RESULTS: 
      return Object.assign({}, state, {
        results: action.payload
      });
    default:
      return state;
  }
}

export const resultsReducer2 = (state=initialState, action={}) => {
  switch(action.type) {
    case RENDER_SUGGESTIONS:
      return Object.assign({}, state, {
        searchvalue: action.payload
      });
    case GET_RESULTS: 
      return Object.assign({}, state, {
        results: action.payload
      });
    default:
      return state;
  }
}


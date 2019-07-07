import db from './db'
import {
  RENDER_SUGGESTIONS,
  GET_RESULTS
} from './constants';

export const triggerSuggestions = (searchvalue) => {
  console.log(searchvalue)
  return {
    type: RENDER_SUGGESTIONS,
    payload: searchvalue
  }
}

export const getResults = () => {
  return {
    type: GET_RESULTS,
    payload: db
  }
}
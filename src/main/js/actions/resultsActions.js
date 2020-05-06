import axios from 'axios';
import { localhostURL } from '../config';

export const types = {
  SET_RESULTS: 'SET_RESULTS',
  SET_DELETE_URL: 'SET_DELETE_URL',
  SET_SERVER: 'SET_SERVER'
};

export function setResults (payload) {
  return {
    type: types.SET_RESULTS,
    payload
  }
}

export function setDeleteUrl (payload) {
  return {
    type: types.SET_DELETE_URL,
    payload
  }
}

export function setServer (payload) {
  return {
    type: types.SET_SERVER,
    payload
  }
}

export const getResults = () => (
  (dispatch) => {
    return axios.get(localhostURL)
      .then(response => {
        dispatch (setResults(response.data));
        dispatch (setServer(response.headers["x-upstream"]));
      })
      .catch(err => {
        dispatch (setResults());
      })
  }
)

export const deleteUrl = (dataDel) => (
  (dispatch) => {
    return axios.delete(localhostURL, {
      data: dataDel,
      headers: {
        'content-Type': 'application/json'
      },
    })
      .then(response => { 
        const { url } = JSON.parse(dataDel);
        dispatch (setDeleteUrl(url));
      })
      .catch(response => {
        dispatch (setDeleteUrl());
      })
  }
)


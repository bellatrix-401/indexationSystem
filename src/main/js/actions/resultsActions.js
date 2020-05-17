import axios from 'axios';
import { localhostUrl } from '../config/paths';

export const types = {
  SET_RESULTS: 'SET_RESULTS',
  SET_DELETE_URL: 'SET_DELETE_URL',
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

export const getResults = () => (
  (dispatch) => {
    return axios.get(localhostUrl)
      .then(response => {
        dispatch (setResults(response.data));
      })
      .catch(err => {
        dispatch (setResults());
      })
  }
)

export const deleteUrl = (dataDel) => (
  (dispatch) => {
    return axios.delete(localhostUrl, {
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


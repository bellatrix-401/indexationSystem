import axios from 'axios';
import { localhostURL } from '../config';

export const types = {
  FIND_RESULTS: 'FIND_RESULTS',
  DELETE_URL: 'DELETE_URL'
};

export const findResults = () => (
  (dispatch) => {
    return axios.get(localhostURL).then(response => {
      dispatch ({
        type: types.FIND_RESULTS,
        payload: response.data,
      });
    })
  }
)

export const deleteUrl = (url) => (
  (dispatch) => {
    return axios.delete(localhostURL, {
      urls: url
    },{
      headers: {
        'content-Type': 'application/json'
      }
    }).then(response => {
      dispatch ({
        type: types.DELETE_URL,
        payload: url,
      });
    })
  }
)



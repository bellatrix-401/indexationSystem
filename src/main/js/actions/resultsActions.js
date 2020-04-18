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

export const deleteUrl = (dataDel) => (
  (dispatch) => {
    return axios.delete(localhostURL, {
      data: dataDel,
      headers: {
        'content-Type': 'application/json'
      },
    })
      .then(response => {
        dispatch ({
          type: types.DELETE_URL,
          payload: dataDel,
        });
      })
      .catch(response => {
        console.log(response)
      })
  }
)



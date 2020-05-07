import axios from 'axios';
import { apiUrl } from '../config/paths';

export const types = {
  SET_INSTANCE_ID: 'SET_INSTANCE_ID',
};

export function setInstanceId (payload) {
  return {
    type: types.SET_INSTANCE_ID,
    payload
  }
}

export const getInstanceId = () => (
  (dispatch) => {
    return axios.get(apiUrl+'/instance')
      .then(response => {
        console.log(response)
        dispatch (setInstanceId(response.data));
      })
      .catch(err => {
        dispatch (setInstanceId());
      })
  }
)
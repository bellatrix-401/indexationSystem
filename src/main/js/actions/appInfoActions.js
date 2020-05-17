import axios from 'axios';
import { instanceUrl, versionUrl } from '../config/paths';

export const types = {
  SET_INSTANCE_ID: 'SET_INSTANCE_ID',
  SET_APP_VERSION: 'SET_APP_VERSION',
};

export function setInstanceId (payload) {
  return {
    type: types.SET_INSTANCE_ID,
    payload
  }
}

export function setAppVersion (payload) {
  return {
    type: types.SET_APP_VERSION,
    payload
  }
}

export const getInstanceId = () => (
  (dispatch) => {
    return axios.get(instanceUrl)
      .then(response => {
        dispatch (setInstanceId(response.data));
      })
      .catch(err => {
        dispatch (setInstanceId());
      })
  }
)

export const getAppVersion = () => (
  (dispatch) => {
    return axios.get(versionUrl)
      .then(response => {
        console.log(response.data);
        dispatch (setAppVersion(response.data));
      })
      .catch(err => {
        dispatch (setAppVersion());
      })
  }
)
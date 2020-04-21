import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { localhostURL } from '../../../main/js/config';
import { 
  types, 
  setResults, 
  getResults, 
  setDeleteUrl, 
  deleteUrl 
} from '../../../main/js/actions/resultsActions';

const expect = global.expect;
const middlewares = [thunk];
const mockstore = configureMockStore(middlewares);
const payload = {test: "test"};

describe('Actions', () => {
  
    beforeEach(function () {
      moxios.install()
    })

    afterEach(function () {
      moxios.uninstall()
    })

    it('Test setDeleteUrl()', () => {
      const expectedAction = {
        type: types.SET_DELETE_URL,
        payload
      }
      expect(setDeleteUrl(payload)).toEqual(expectedAction);
    });

    it('Test setResults()', () => {
      const expectedAction = {
        type: types.SET_RESULTS,
        payload
      }
      expect(setResults(payload)).toEqual(expectedAction);
    });

    it('Test getResults(word, url) Success', () => {
      const store = mockstore({});
      const response = [{id: 1, url: 'http://google.com'}];

      moxios.stubRequest(localhostURL, {
        status: 200,
        response: response
      })

      const expectedActions = [
        {
          "type": types.SET_RESULTS,
          "payload": response
        }
      ];

      return store.dispatch(getResults()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    })

    it('Test getResults(word, url) Failed', () => {
      const store = mockstore({});

      moxios.stubRequest(localhostURL, {
        status: 401,
        response: null
      })

      const expectedActions = [
        {
          "type": types.SET_RESULTS,
          "payload": undefined
        }
      ];

      return store.dispatch(getResults()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    })

    it('Test deleteUrl(url) Success', () => {
      const store = mockstore({});
      const url = JSON.stringify({url: 'http://google.com'});
      const payload = 'http://google.com';

      moxios.stubRequest(localhostURL, {
        status: 200,
        response: url
      })

      const expectedActions = [
        {
          "type": types.SET_DELETE_URL,
          "payload": payload
        }
      ];

      return store.dispatch(deleteUrl(url)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    })

    it('Test deleteUrl(url) Failed', () => {
      const store = mockstore({});
      const request = {url: 'http://google.com'};


      moxios.stubRequest(localhostURL, {
        status: 401,
        response: undefined
      })

      const expectedActions = [
        {
          "type": types.SET_DELETE_URL,
          payload: undefined
        }
      ];

      return store.dispatch(deleteUrl(request)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    })
})
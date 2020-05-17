import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { localhostUrl } from '../../../main/js/config/paths';
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
      const responseData = [{id: 1, url: 'http://google.com'}];

      moxios.stubRequest(localhostUrl, {
        status: 200,
        response: responseData
      })

      const expectedActions = [
        {
          "type": types.SET_RESULTS,
          "payload": responseData
        }
      ];

      return store.dispatch(getResults()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    })

    it('Test getResults(word, url) Failed', () => {
      const store = mockstore({});

      moxios.stubRequest(localhostUrl, {
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
      const store = mockstore({urls:[]});
      const url = JSON.stringify({url: 'http://google.com'});
      const payload = 'http://google.com';

      moxios.stubRequest(localhostUrl, {
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
      const store = mockstore({urls:[]});
      const request = {url: 'http://google.com'};


      moxios.stubRequest(localhostUrl, {
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
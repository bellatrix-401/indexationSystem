import mockstoreConf from 'redux-mock-store';
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
const mockstore = mockstoreConf(middlewares);
const payload = {test: "test"};

describe('Actions', () => {
  
    beforeEach(function () {
      // import and pass your custom axios instance to this method
      moxios.install()
    })

    afterEach(function () {
      // import and pass your custom axios instance to this method
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
})
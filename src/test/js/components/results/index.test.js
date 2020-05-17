import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom'
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import ResultsApp from '../../../../main/js/components/results';
import { Results } from '../../../../main/js/components/results';
import Page from '../../../../main/js/components/results/page';

Enzyme.configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Results component Test', () => {

  let store;
  let getResults;
  let deleteUrl;
  let getInstanceId;
  
  beforeEach(() => {

    store = mockStore({
      results: { 
        urls: [
          {
            id: 1,
            url: "http://google.com"
          },
        ]
      },
      appInfo: {
        instanceId: 'test',
        version: 'test',
      }
    });

    getResults = jest.fn();
    deleteUrl = jest.fn();
    getInstanceId = jest.fn();
  })

  it('Snapshot Results', () => {
    const component = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <ResultsApp />
        </MemoryRouter>
      </Provider>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('Should onClick handler', () => {
    const results = [{id: 1, url:"http://google.com"}];
    const handleDelete = jest.fn();
    const component = shallow(
      <Page 
        handleDelete={handleDelete}
        results={results}
      />
    );
    const wrapper = component.find(`[data-test='buttonDelete']`);

    wrapper.simulate('click');
    expect(handleDelete).toBeCalled();
  });

  it('Should display TableBody with results', () => {
    const results = [{id: 1, url:"http://google.com"}];
    const component = shallow(
      <Page
        results={results}
      />
    );
    const wrapper = component.find(`[data-test='tableResults']`);

    expect(wrapper).toBeTruthy();
  });

  it('Should display TableBody with results', () => {
    const component = shallow(
      <Page
        results={[]}
      />
    );
    const wrapper = component.find(`[data-test='tableResults']`);
    const wrapper2 = component.find(`[data-test='tableEmpty']`);

    expect(wrapper).toEqual({});
    expect(wrapper2).toBeTruthy();
  });

  it('Should handleDelete()', () => {
    const data = JSON.stringify({
      url: "http://google.com"
    });

    const component = shallow(
      <Results 
        getResults={getResults}
        deleteUrl={deleteUrl}
      />
    );
    const instance = component.instance();
    

    instance.handleDelete(data);
    expect(deleteUrl).toBeCalled();
  });
  
});
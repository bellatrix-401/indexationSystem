import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import NavBar from '../../../../main/js/components/navBar';
import Page from '../../../../main/js/components/navBar/page';

Enzyme.configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('NavBar component Test', () => {

  let store;
  let getInstanceId;
  
  beforeEach(() => {

    store = mockStore({
      appInfo: {
        instanceId: 'test',
      }
    });

    getInstanceId = jest.fn();
  })

  it('Snapshot navBar', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <NavBar />
        </MemoryRouter>
      </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should show the link to /all', () => {
    const component = shallow(<Page />);
    expect(component.find('.button').at(0).exists()).toBeTruthy();
  });

  it('Should show the link to /', () => {
    const component = shallow(<Page />);
    expect(component.find('.button').at(1).exists()).toBeTruthy();
  })
})
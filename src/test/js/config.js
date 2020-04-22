import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow;
global.render = render;
global.mount = mount;

const middlewares = [thunk];
global.mockStore = configureMockStore(middlewares);
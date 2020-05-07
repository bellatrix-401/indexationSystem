import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom'
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import FormApp from '../../../../main/js/components/form';
import Page from '../../../../main/js/components/form/page';
import { regExpUrl } from '../../../../main/js/constants';

Enzyme.configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Results component Test', () => {

  let props;
  let store;
  let getInstanceId;

  beforeEach(() => {
    const props = {
      onChangeText: jest.fn(),
      handleSubmit: jest.fn(),
      validateUrl: jest.fn(),
      word: "",
      url: "",
      waiting: false,
      validUrl: true,
    }
    
    store = mockStore({
      index: {
        instanceId: 'test',
      }
    });

    getInstanceId = jest.fn();
  });

  it('Snapshot Form', () => {
    const form = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <FormApp />
        </MemoryRouter>
      </Provider>
    )

    expect(form.toJSON()).toMatchSnapshot();
  });

  it('Should render text fields', () => {
    const component = shallow(
      <Page 
        {...props}
      />
    );

    expect(component.find(`[data-test='url']`).exists()).toBeTruthy();
    expect(component.find(`[data-test='word']`).exists()).toBeTruthy();
  });

  it('Should onSubmit handler', () => {
    const fakeEvent = { preventDefault: () => 'preventDefault' };
    const handleSubmit = jest.fn();
    const component = shallow(
      <Page 
        handleSubmit={handleSubmit} 
      />
    );
    const wrapper = component.find(`[data-test='form']`);

    wrapper.simulate('submit', fakeEvent);
    expect(handleSubmit).toBeCalled();
  });

  it('Should onBlur handler', () => {
    const validateUrl = jest.fn();
    const component = shallow(
      <Page 
        validateUrl={validateUrl}
      />
    );
    const wrapper = component.find(`[data-test='url']`);

    wrapper.simulate('blur');
    expect(validateUrl).toBeCalled();
  });

  it('Should onChange handler', () => {
    const fakeEvent = { target: { value: "sometext" } };
    const onChangeText = jest.fn();
    const component = shallow(
      <Page 
        onChangeText={onChangeText} 
      />
    );
    const wrapperUrl = component.find(`[data-test='url']`);
    const wrapperWord = component.find(`[data-test='word']`);

    wrapperUrl.simulate('change', fakeEvent);
    wrapperWord.simulate('change', fakeEvent);
    expect(onChangeText).toBeCalled();
  });

  it('Should onChangeText()', () => {
    const fakeEvent = { target: {id:"url", value:"http://google.com"} };
    const component = shallow( <FormApp /> );
    const instance = component.instance();

    instance.onChangeText(fakeEvent);
    expect(component.state(fakeEvent.target.id)).toBeTruthy();
  });

  it('Should validateUrl()', () => {
    const component = shallow( <FormApp /> );
    const regexUrl = new RegExp(regExpUrl);
    const url = "http://google.com";
    const notUrl = "something";
    const instance = component.instance();

    instance.validateUrl();
    expect(regexUrl.test(url)).toBe(true);
    expect(regexUrl.test(notUrl)).toBe(false);
  });

  it('Should handleSubmit()', () => {
    const fakeEvent = { preventDefault: () => 'preventDefault' };
    const data = JSON.stringify({
      word: "test", 
      url: "http://google.com"
    });
    const component = shallow( <FormApp /> );
    const instance = component.instance();

    instance.handleSubmit(fakeEvent);
    expect(component.state('waiting')).toEqual(true);
  });
  
})
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import NavBar from '../../../../main/js/components/navBar';
import Page from '../../../../main/js/components/navBar/page';

Enzyme.configure({ adapter: new Adapter() });

describe('NavBar component Test', () => {

  it('Snapshot navBar', () => {
    const tree = renderer
    .create(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
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
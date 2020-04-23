import React from 'react';
import { MemoryRouter } from 'react-router-dom'
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import FormApp from '../../../../main/js/components/form';

Enzyme.configure({ adapter: new Adapter() });



describe('Results component Test', () => {

  it('Snapshot Form', () => {
    const form = renderer.create(
      <MemoryRouter>
        <FormApp />
      </MemoryRouter>
    )

    expect(form.toJSON()).toMatchSnapshot();
  });
  
})
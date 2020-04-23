import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import NavBar from '../../../../main/js/components/navBar';

describe('NavBar component Test', () => {

  it('Snapshot navBar', () => {
    const tree = renderer
    .create(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  })
})
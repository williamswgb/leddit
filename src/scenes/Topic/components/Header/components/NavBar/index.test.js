import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import NavBar from './index';

describe("NavBar", () => {
  it("always renders a NavBar", () => {
    const renderedComponent = mount(<MemoryRouter><NavBar /></MemoryRouter>);
    expect(renderedComponent.find('NavBar').node).toBeDefined();
  });
});

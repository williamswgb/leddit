import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import Header from './index';

describe("Header", () => {
  it("always renders a Header", () => {
    const renderedComponent = mount(<MemoryRouter><Header /></MemoryRouter>);
    expect(renderedComponent.find('Header').node).toBeDefined();
  });
});

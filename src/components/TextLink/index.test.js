import React from 'react'
import { mount } from "enzyme";
import { MemoryRouter } from 'react-router-dom'
import TextLink from './index'

describe("TextLink", () => {
  it("always renders a text link", () => {
    const renderedComponent = mount(<MemoryRouter><TextLink to='/'/></MemoryRouter>);
    expect(renderedComponent.find('NavLink').node).toBeDefined();
  });
});

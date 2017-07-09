import React from 'react';
import { mount } from 'enzyme';
import Home from './index';

describe("Home", () => {
  it("always renders a Home", () => {
    const renderedComponent = mount(<Home />);
    expect(renderedComponent.find('Home').node).toBeDefined();
  });
});

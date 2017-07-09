import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import Topic from './index';

describe("Topic", () => {
  it("always renders a Topic", () => {
    const renderedComponent = mount(<MemoryRouter><Topic /></MemoryRouter>);
    expect(renderedComponent.find('Topic').node).toBeDefined();
  });
});

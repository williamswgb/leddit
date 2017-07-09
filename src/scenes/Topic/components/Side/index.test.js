import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import Side from './index';

describe("Side Panel", () => {
  it("renders a Switch", () => {
    const renderedComponent = mount(
      <MemoryRouter>
        <Side />
      </MemoryRouter>
    );
    expect(renderedComponent.find('Switch').node).toBeDefined();
  });
});

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import { mount } from 'enzyme';
import List from './index';
import { Provider } from 'react-redux';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

const initialState = {
  Topic: {
    data: {
      topics:{
        byId: [],
        order: [],
        byHash: {},
      }
    }
  }
}

describe("List Container", () => {
  it("always renders a List View", () => {
    const store = mockStore(initialState)
    const renderedComponent = mount(
      <MemoryRouter>
        <Provider store={store}>
          <List />
        </Provider>
      </MemoryRouter>
    );
    expect(renderedComponent.find('ListView').node).toBeDefined();
  });
});

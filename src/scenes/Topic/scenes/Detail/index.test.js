import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import { mount } from 'enzyme';
import Detail from './index';
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

describe("Detail Container", () => {
  it("always renders a Redirect if data is not specified", () => {
    const store = mockStore(initialState)
    const renderedComponent = mount(
      <MemoryRouter>
        <Provider store={store}>
          <Detail />
        </Provider>
      </MemoryRouter>
    );
    expect(renderedComponent.find('Redirect').node).toBeDefined();
  });
});

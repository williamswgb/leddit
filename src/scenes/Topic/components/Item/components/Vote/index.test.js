import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import { mount } from 'enzyme';
import Vote from './index';
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

describe("Vote", () => {
  it("renders a Vote", () => {
    const store = mockStore(initialState)
    const renderedComponent = mount(
      <Provider store={store}>
        <Vote />
      </Provider>
    );
    expect(renderedComponent.find('VoteView').node).toBeDefined();
  });
});

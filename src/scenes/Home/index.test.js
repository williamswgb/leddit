import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Home from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Home />, div);
});

it('renders shallowly without crashing', () => {
  shallow(<Home />)
});

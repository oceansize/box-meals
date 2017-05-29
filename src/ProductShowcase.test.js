import React from 'react';
import ReactDOM from 'react-dom';
import ProductShowcase from './ProductShowcase';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProductShowcase />, div);
});

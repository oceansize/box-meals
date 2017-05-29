import React from 'react';
import ReactDOM from 'react-dom';
import ProductShowcase from './ProductShowcase';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<ProductShowcase />, document.getElementById('root'));
registerServiceWorker();

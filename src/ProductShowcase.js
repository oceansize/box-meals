import React, { Component } from 'react';
import './ProductShowcase.css';
import Category from './Category';

class ProductShowcase extends Component {
  render() {
    return (
      <div className="product-showcase">
        <Category name="Wine" />
      </div>
    );
  }
}

export default ProductShowcase;

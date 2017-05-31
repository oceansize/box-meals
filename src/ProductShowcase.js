import React, { Component } from 'react';
import './ProductShowcase.css';
import CategoryList from './CategoryList';

class ProductShowcase extends Component {
  render() {
    return (
      <div className="product-showcase">
        <CategoryList />
      </div>
    );
  }
}

export default ProductShowcase;

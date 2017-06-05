import React, { Component } from 'react';
import './Category.css';

class Category extends Component {
  render() {
    return(
      <li className="category">{this.props.name}</li>
    );
  }
}

export default Category;


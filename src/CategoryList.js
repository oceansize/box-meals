import React, { Component } from 'react';
import './CategoryList.css'
import Category from './Category';

class CategoryList extends Component {

  constructor(props) {
    super(props);
    this.state = { categories: ['Beers', 'Wines', 'Spirits'] };
  };

  renderCategories() {
    return this.state.categories.map(name => (
      <Category key={name} name={name} />
    ));
  };

  render() {
    return (
      <ul className="category-list">
        {this.renderCategories()}
      </ul>
    );
  }
}

export default CategoryList;

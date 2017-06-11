import React, { Component } from 'react';
import './CategoryList.css'
import Category from './Category';
import { dataFetch } from './api/data-fetch';

class CategoryList extends Component {

  constructor (props) {
    super(props);
    this.state = { categories: [] };
  };

  componentWillMount () {
    let endpoint = "categories"
    dataFetch(endpoint)
      .then(items => this.setState({ categories : items}))
  };

  renderCategories () {
    return this.state.categories.map(category => (
      <Category key={category.id} name={category.title} />
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


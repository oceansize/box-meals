import React, { Component } from 'react';
import './CategoryList.css'
import Category from './Category';

class CategoryList extends Component {

  constructor (props) {
    super(props);
    this.state = { categories: [] };
  };

  addCategories (newCategory) {
    this.setState({ categories: [...this.state.categories, newCategory]});
  };

  componentWillMount () {
    let url = "https://api.gousto.co.uk/products/v2.0/categories";

    fetch(url)
      .then(data => data.json() )
      .then(res => res.data.forEach(element => {
        this.addCategories(element.title);
      }))
      .catch((err) => {
        console.log('much error===', err);
      });
  };

  renderCategories () {
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


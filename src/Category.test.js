import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Category from './Category';

describe(Category, () => {

  it('matches the component snapshot', () => {
    const tree = renderer.create(
      <Category name="Desserts" />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('displays the correct name', () => {
    const categoryName = 'Sauces & Dressings';
    const component = shallow(
      <Category name="Sauces & Dressings" />
    );
    expect(component.text()).toContain(categoryName);
  });
});


import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import CategoryList from './Categorylist';

describe(CategoryList, () => {

  it('matches the component snapshot', () => {
    const tree = renderer.create(
      <CategoryList />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

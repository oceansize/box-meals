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
    const name = 'Aperitifs';
    const component = shallow(
      <Category name="Aperitifs" />
    );
    expect(component.text()).toContain(name);
  });
});


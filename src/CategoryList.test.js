import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import CategoryList from './Categorylist';
const getData = require('./api/data-fetch');
jest.mock('./api/request');

describe(CategoryList, () => {

  it('matches the component snapshot', () => {
    const tree = renderer.create(
      <CategoryList />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should load categories from API', () => {
    return getData.dataFetch("categories")
    .then(items => {
      expect(items).toBeDefined()
      expect(items[0].title).toEqual('Mocked Drinks Cabinet')
    })
  })
});


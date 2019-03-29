import React from 'react';
import { mount } from 'enzyme';
import Activities from './Activities';
import { createStoreForTest } from '../testUtils/testStore';

describe('Activities component', () => {

  it('should display empty list', () => {
    const component = mount(<Activities store={createStoreForTest()}/>);
    expect(component.find('[data-test="activity-list-entry"]')).not.toExist();
  });
});
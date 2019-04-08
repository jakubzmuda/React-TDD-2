import React from 'react';
import { mount } from 'enzyme';
import Activities from './Activities';
import { createStoreForTest } from '../testUtils/testStore';
import AjaxStub from '../testUtils/ajaxStub';
import { Provider } from 'react-redux';

describe('Activities component', () => {

  it('should display placeholder', () => {
    const component = mountComponent();

    expect(component.find('[data-test="activity-entry"]')).not.toExist();
    expect(component.find('[data-test="activity-placeholder"]')).toExist();
  });

  it('should call for activities and display them', () => {
    const ajax = respondWithActivity('Learn how to whistle with your fingers');

    const component = mountComponent({ ajax: ajax });

    component.find('[data-test="random-activity-button"]').simulate('click');

    expect(component.find('[data-test="activity-entry"]')).toHaveText('Learn how to whistle with your fingers')
  });

  const mountComponent = (storeProperties) => mount(<Provider store={createStoreForTest(storeProperties)}><Activities/></Provider>);

  const respondWithActivity = (activityName) => AjaxStub.newStub().success({
    url: 'https://www.boredapi.com/api/activity',
    method: 'GET'
  }, { activity: activityName });
});
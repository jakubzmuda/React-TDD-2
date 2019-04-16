import React from 'react';
import { mount } from 'enzyme';
import Activities from './Activities';
import { createStoreForTest } from '../../testUtils/testStore';
import AjaxStub from '../../testUtils/ajaxStub';
import { Provider } from 'react-redux';
import { buildFullState, withActivities } from "../../testUtils/stateBuilder";

describe('Activities component', () => {

  it('should display empty list', () => {
    const component = mountComponent();

    expect(component.find('[data-test="activity-entry"]')).not.toExist();
  });

  it('should add new activity to the list and display it along existing one', () => {
    const initialState = buildFullState(withActivities([{activity: 'Go see a movie'}]));
    const ajax = respondWithActivity('Learn how to whistle with your fingers');
    const component = mountComponent({ initialState, ajax});

    component.find('[data-test="random-activity-button"]').simulate('click');

    const activityEntries = component.find('[data-test="activity-entry"]');
    expect(activityEntries.at(0)).toHaveText('Go see a movie');
    expect(activityEntries.at(1)).toHaveText('Learn how to whistle with your fingers');
  });

  const mountComponent = (storeProperties) => mount(<Provider store={createStoreForTest(storeProperties)}><Activities/></Provider>);

  const respondWithActivity = (activityName) => AjaxStub.newStub().success({
    url: 'https://www.boredapi.com/api/activity',
    method: 'GET'
  }, { activity: activityName });
});
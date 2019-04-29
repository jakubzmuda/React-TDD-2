import React from 'react';
import AjaxStub from '../../testUtils/ajaxStub';
import { buildFullState, withActivities } from '../../testUtils/stateBuilder';
import { mountWithCustomWrappers } from 'enzyme-custom-wrappers';
import { createStoreForTest } from "../../testUtils/testStore";
import Activities from "./Activities";
import { Provider } from "react-redux";
import { activitiesWrapper } from "./Activities.wrapper";

describe('Activities component', () => {

  it('should display empty list', () => {
    const component = mountComponent();

    expect(component.anyActivity()).not.toExist();
  });

  it('should add new activity to the list and display it along existing one', () => {
    const initialState = buildFullState(withActivities([{ activity: 'Go see a movie' }]));
    const ajax = respondWithActivity('Learn how to whistle with your fingers');
    const component = mountComponent({ initialState, ajax });

    component.getNewActivity();

    expect(component.activityAt(0)).toHaveText('Go see a movie');
    expect(component.activityAt(1)).toHaveText('Learn how to whistle with your fingers');
  });

  const mountComponent = (storeProperties) => mountWithCustomWrappers(<Provider store={createStoreForTest(storeProperties)}><Activities /></Provider>, activitiesWrapper);

  const respondWithActivity = (activityName) => AjaxStub.newStub().success({
    url: 'https://www.boredapi.com/api/activity',
    method: 'GET'
  }, { activity: activityName });
});
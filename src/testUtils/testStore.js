import  { applyMiddleware, createStore } from 'redux';
import reducers from '../reducers/reducers';
import rootEpic from '../epics/epics';
import { createEpicMiddleware } from 'redux-observable';
import { buildFullState } from './stateBuilder';
import AjaxStub from './ajaxStub';
import { ActivitiesApi } from '../api/ActivitiesApi';

export const createStoreForTest = ({ initialState = buildFullState(), ajax = AjaxStub.newStub()} = {}) => {
  const activitiesApi = new ActivitiesApi(ajax.instance());
  const epicMiddleware = createEpicMiddleware({ dependencies: { activitiesApi } });
  const store = createStore(reducers, initialState, applyMiddleware(epicMiddleware));

  epicMiddleware.run(rootEpic);

  return store;
};
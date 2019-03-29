import reducers from './reducers/reducers';
import { createEpicMiddleware } from 'redux-observable';
import { createStore, applyMiddleware, compose } from 'redux';
import rootEpic from './epics/epics';
import { ajax } from 'rxjs/ajax';
import { ActivitiesApi } from './api/ActivitiesApi';

export default () => {
  const activitiesApi = new ActivitiesApi(ajax);
  const epicMiddleware = createEpicMiddleware({ dependencies: { activitiesApi } });

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(reducers, composeEnhancers(applyMiddleware(epicMiddleware)));

  epicMiddleware.run(rootEpic);

  return store;
};
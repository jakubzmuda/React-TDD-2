import reducers from './reducers/reducers';
import { createEpicMiddleware } from 'redux-observable';
import { createStore, applyMiddleware, compose } from 'redux';
import rootEpic from './epics/epics'

export default () => {
  const epicMiddleware = createEpicMiddleware();

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(reducers,composeEnhancers(
    applyMiddleware(
      epicMiddleware,
      // scheduleBackgroundTaskMiddleware,
      // cancelBackgroundTaskMiddleware
    )
  ));

  epicMiddleware.run(rootEpic);

  return store;
};
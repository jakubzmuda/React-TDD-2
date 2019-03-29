import activityEpic from './activityEpic';
import { combineEpics } from 'redux-observable';

export default combineEpics(
  ...activityEpic
)
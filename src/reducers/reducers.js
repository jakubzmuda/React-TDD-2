import { combineReducers } from 'redux';
import activityReducer from './activityReducer';

export default combineReducers({ activities: activityReducer })
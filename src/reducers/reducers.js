import { combineReducers } from 'redux';
import activitiesReducer from './activitiesReducer';

export default combineReducers({ activities: activitiesReducer })
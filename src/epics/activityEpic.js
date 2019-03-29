import { ActivityType as ActionType, fetchRandomActivitySuccess } from '../actions/actions';
import 'rxjs/add/operator/mergeMap'

export const fetchRandomActivity = (action$, store, { activitiesApi }) =>
  action$.ofType(ActionType.FETCH_RANDOM_ACTIVITY)
    .mergeMap(action => {
      return activitiesApi.fetchActivities()
        .map(result => fetchRandomActivitySuccess(result));
    });

export default [
  fetchRandomActivity
]
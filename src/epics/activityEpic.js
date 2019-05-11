import { ActionType, fetchRandomActivitySuccess } from '../actions/actions';
import { of } from 'rxjs'
import { mergeMap, switchMap } from 'rxjs/operators'
import { ofType } from 'redux-observable'

export const fetchRandomActivity = (action$, store, { activitiesApi }) =>
  action$.pipe(
    ofType(ActionType.FETCH_RANDOM_ACTIVITY),
    switchMap(() => activitiesApi.fetchActivities().pipe(
      mergeMap(result => of(fetchRandomActivitySuccess(result.response))),
    ))
  );

export default [
  fetchRandomActivity
]

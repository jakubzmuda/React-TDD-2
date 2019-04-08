export const ActionType = {
  FETCH_RANDOM_ACTIVITY: 'FETCH_RANDOM_ACTIVITY',
  FETCH_RANDOM_ACTIVITY_SUCCESS: 'FETCH_RANDOM_ACTIVITY_SUCCESS'
};

export const fetchRandomActivity = () => ({
  type: ActionType.FETCH_RANDOM_ACTIVITY,
  payload: {}
});

export const fetchRandomActivitySuccess = (activity) => ({
  type: ActionType.FETCH_RANDOM_ACTIVITY_SUCCESS,
  payload: activity
});
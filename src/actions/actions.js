export const ActivityType = {
  FETCH_RANDOM_ACTIVITY: 'FETCH_RANDOM_ACTIVITY',
  FETCH_RANDOM_ACTIVITY_SUCCESS: 'FETCH_RANDOM_ACTIVITY_SUCCESS'
};

export const fetchRandomActivity = () => ({
  type: ActivityType.FETCH_RANDOM_ACTIVITY,
  payload: {}
});

export const fetchRandomActivitySuccess = (activity) => ({
  type: ActivityType.FETCH_RANDOM_ACTIVITY_SUCCESS,
  payload: activity
});
import { ActionType as ActionType } from '../actions/actions';

export const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_RANDOM_ACTIVITY_SUCCESS:
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
}
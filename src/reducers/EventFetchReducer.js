import {
  EVENT_FETCH_SUCCESS,
  // EVENT_UPDATE,
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EVENT_FETCH_SUCCESS:
      return action.payload;

    default:
      return state;
  }
};
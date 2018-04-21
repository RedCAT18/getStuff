import {
  EVENT_RESERVATION,
  EVENT_RESERVATION_ERROR,
  CLOSE_MODAL
} from '../actions/types';

const INITIAL_STATE = {
  message: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EVENT_RESERVATION:
      return { ...state, message: '' };
    case EVENT_RESERVATION_ERROR:
      return { ...state, message: action.payload };
    case CLOSE_MODAL:
      return INITIAL_STATE;
    default: 
      return state;
  }
};

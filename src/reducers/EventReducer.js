
import {
  UPDATE_EVENT,
  CREATE_EVENT,
  CREATE_FAIL,
  UPDATED_EVENT_SAVE
} from '../actions/types';

const INITIAL_STATE = {
  //title of event
  title: '',
  //explanation about event
  description: '',
  //when happen?
  date: '',
  //how many ppl can take place
  amount: '',
  //who create event?
  available: true,
  message: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_EVENT:
      return { ...state, [action.payload.prop] : action.payload.value };
    case CREATE_EVENT:
      return { ...INITIAL_STATE };
    case CREATE_FAIL:
      return { ...state, message: action.payload };
    case UPDATED_EVENT_SAVE: 
      return INITIAL_STATE;
    default:
      return state;
  }
};

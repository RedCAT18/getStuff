import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import EventReducer from './EventReducer';
import EventFetchReducer from './EventFetchReducer';
import ReservationReducer from './ReservationReducer';

export default combineReducers({
  login: LoginReducer,
  event: EventReducer,
  fetchEvent: EventFetchReducer,
  reservation: ReservationReducer,
});
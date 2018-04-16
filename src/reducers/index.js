import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import EventReducer from './EventReducer';
import EventFetchReducer from './EventFetchReducer';

export default combineReducers({
  login: LoginReducer,
  event: EventReducer,
  fetchEvent: EventFetchReducer,
});
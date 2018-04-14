import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import EventReducer from './EventReducer';

export default combineReducers({
  login: LoginReducer,
  event: EventReducer,
});
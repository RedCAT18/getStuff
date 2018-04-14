import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  UPDATE_EVENT,
  CREATE_EVENT,
  CREATE_FAIL,
} from './types';

export const updateEvent = ({ prop, value }) => {
  return {
    type: UPDATE_EVENT,
    payload: { prop, value }
  };
};

export const createEvent = ({ title, description, date, amount }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/events`)
    .push({ title, description, date, amount: Number(amount) })
    .then(() => {
      dispatch({ type: CREATE_EVENT });
      Actions.main();
    })
    .catch(error => {
      dispatch({ type: CREATE_FAIL, payload: error });
    });
  };
};
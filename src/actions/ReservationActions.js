import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  EVENT_RESERVATION,
  EVENT_RESERVATION_ERROR,
  CLOSE_MODAL
} from './types';

export const eventReservation = ({ title, description, date, uid, member, amount }) => {
  const { currentUser } = firebase.auth();
  const newAmount = amount - 1;
  member = member === undefined ? currentUser.id : member + ', ' + currentUser.uid;

  return (dispatch) => {
    firebase.database().ref(`/events/${uid}`)
    .set({ title, description, date, member, amount: newAmount, available: (newAmount !== 0 ? true : false) })
    .then(() => {
      dispatch({
        type: EVENT_RESERVATION 
      });
      Actions.main({ type: 'reset' });
    });
  };
};

export const eventReservationError = () => {
  return ({
    type: EVENT_RESERVATION_ERROR,
    payload: 'Already Reserve this event.'
  });
};

export const closeModal = () => {
  return ({
    type: CLOSE_MODAL
  });
};
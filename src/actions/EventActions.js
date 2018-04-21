import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  UPDATE_EVENT,
  CREATE_EVENT,
  CREATE_FAIL,
  EVENT_FETCH_SUCCESS,
  UPDATED_EVENT_SAVE,
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
    firebase.database().ref('/events')
    .push({ title, description, date, amount: Number(amount), user: currentUser.uid })
    .then(() => {
      dispatch({ type: CREATE_EVENT });
      Actions.main();
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: CREATE_FAIL, payload: 'Fail to create new event.' });
    });
  };
};


export const eventFetch = () => {
  // console.log(currentUser.email)
  return (dispatch) => {
    firebase.database().ref('events')
    .on('value', snapshot => {
      dispatch({
        type: EVENT_FETCH_SUCCESS,
        payload: snapshot.val()
      });
    });
  };
};

export const updatedEventSave = ({ title, description, date, amount, uid }) => {
  const { currentUser } = firebase.auth();
  console.log(uid);
  return (dispatch) => {
    firebase.database().ref(`/events/${uid}`)
    .set({ title, description, date, amount: Number(amount), user: currentUser.uid })
    .then(() => {
      dispatch({ type: UPDATED_EVENT_SAVE });
      Actions.main({ type: 'reset' });
    });
  };
};

export const eventDelete = ({ uid }) => {
  return () => {
    firebase.database().ref(`/events/${uid}`)
    .remove()
    .then(() => {
      Actions.main({ type: 'reset' });
    });
  };
};


import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

import {
  INPUT_EMAIL,
  INPUT_PASSWORD,
  LOGIN_SUBMIT,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from './types';

export const inputEmail = (text) => {
  return {
    type: INPUT_EMAIL,
    payload: text
  };
};

export const inputPassword = (text) => {
  return {
    type: INPUT_PASSWORD,
    payload: text
  };
};

export const loginSubmit = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_SUBMIT });

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => successResult(dispatch, user))
    .catch(() => failResult(dispatch));
  };
};

const successResult = (dispatch, user) => {
  dispatch({
    type: LOGIN_SUCCESS,
    payload: user
  });
  Actions.main();
};

const failResult = (dispatch) => {
  dispatch({
    type: LOGIN_FAIL
  });
};
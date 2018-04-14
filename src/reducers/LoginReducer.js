import {
  INPUT_EMAIL,
  INPUT_PASSWORD,
  LOGIN_SUBMIT,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INPUT_EMAIL:
    // console.log(action.payload);
      return { ...state, email: action.payload };
    case INPUT_PASSWORD:
    // console.log(action.payload);
      return { ...state, password: action.payload };
    case LOGIN_SUBMIT:
      return { ...state, loading: true, error: '' };
    case LOGIN_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_FAIL:
      return { ...state, error: 'Login failed.', password: '', loading: false }; 
    default:
      return state;
  }
};
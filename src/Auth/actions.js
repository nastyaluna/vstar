import {PROCESS_AUTH, FETCH_LOGIN, FETCH_REGISTER, SET_ERROR, RESET_AUTH} from './constants';
import {auth} from '../firebase';

const processAuth = () => ({
  type: PROCESS_AUTH
});

const fetchLogin = (payload) => ({
  type: FETCH_LOGIN,
  payload
});

const fetchRegister = (payload) => ({
  type: FETCH_REGISTER,
  payload
});

const setError = payload => ({
  type: SET_ERROR,
  payload
});

const resetAuth = () => ({
  type: RESET_AUTH
});

export const logout = () => {
  return (dispatch) => {
    dispatch(resetAuth());
  };
};

export const register = (email, password) => {
  return async (dispatch) => {
    dispatch(processAuth());

    try {
      const response =
          await auth.createUserWithEmailAndPassword(email, password);
      if (response) dispatch(fetchRegister(response));
    } catch (e) {
      dispatch(setError(e.message));
    }
  }
};

export const login = (email, password) => {
  return async (dispatch) => {
    dispatch(processAuth());

    try {
      const response = await auth.signInWithEmailAndPassword(email, password);
      if (response) dispatch(fetchLogin(response));
    } catch (e) {
      dispatch(setError(e.message));
    }
  }
};
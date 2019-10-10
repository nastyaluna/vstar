import {PROCESS_AUTH, FETCH_LOGIN, FETCH_REGISTER, SET_ERROR, RESET_ALL} from './constants';
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

export const resetAll = () => ({
  type: RESET_ALL
});

export const resetAuth = () => {
  return (dispatch) => {
    dispatch(resetAll());
  };
};

export const register = (email, password) => {
  return async (dispatch) => {
    dispatch(processAuth());

    try {
      const response =
          await auth.createUserWithEmailAndPassword(email, password);
      if (response) dispatch(fetchRegister(response));
      if (response && response.message) dispatch(setError(response.message));

      return response;
    } catch (e) {
      dispatch(setError(e.message));
      return e;
    }
  }
};

export const login = (email, password) => {
  return async (dispatch) => {
    dispatch(processAuth());

    try {
      const response = await auth.signInWithEmailAndPassword(email, password);
      if (response) dispatch(fetchLogin(response));
      if (response && response.message) dispatch(setError(response.message));

      return response;
    } catch (e) {
      dispatch(setError(e.message));
      return e;
    }
  }
};
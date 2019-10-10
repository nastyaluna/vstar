import {PROCESS_AUTH, FETCH_LOGIN, FETCH_REGISTER, SET_ERROR, RESET_AUTH} from "./constants";

const INITIAL_STATE = {
  isLoading: false,
  data: null,
  error: null,
  isError: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PROCESS_AUTH:
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    case FETCH_LOGIN:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        isError: false
      };
    case FETCH_REGISTER:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        isError: false
      };
    case SET_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        isError: true
      };
    case RESET_AUTH:
      return {
        ...state,
        isLoading: false,
        data: null,
        isError: false
      };
    default:
      return state;
  }
};
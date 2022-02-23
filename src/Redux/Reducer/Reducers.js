import {
  LoginRequest,
  LoginSuccess,
  LoginFail,
  LogOut,
  LoadProfile,
} from "../actionType";

const initialState = {
    accessToken: sessionStorage.getItem('Access-token')
    ? sessionStorage.getItem('Access-token')
    : null,
 user: sessionStorage.getItem('User')
    ? JSON.parse(sessionStorage.getItem('User'))
    : null,
  loading: false,
};
export const Reducers = (State = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LoginRequest:
      return {
        ...State,
        loading: true,
      };

    case LoginSuccess:
      return {
        ...State,
        accessToken: payload,
        loading: false ,
      };
    case LoginFail:
      return {
        ...State,
        accessToken: null,
        loading: false,
        error: payload,
      };
    case LogOut:
      return {
        ...State,
        accessToken: null,
        user: null,
      };

    case LoadProfile:
      return {
        ...State,
        user: payload,
      };
    default:
      return State;
  }
};

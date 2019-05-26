import * as actionTypes from "../actions/actionsTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  authRedirectPath: "/"
};

const authStart = (state, action) => {
  return updateObject(state, { error: null, loading: true });
};

const setAuthRedirect = (state, action) => {
  return updateObject(state, { authRedirectPath: action.payload.path });
};

const authSuccess = (state, action) => {
  console.log(action.payload.idToken);
  return updateObject(state, {
    token: action.payload.idToken,
    userId: action.payload.userId,
    error: null,
    loading: false
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.payload.error,
    loading: false
  });
};

const authLogout = (state, action) => {
  return updateObject(state, { token: null, userId: null });
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    case actionTypes.SET_AUTH_REDIRECT:
      return setAuthRedirect(state, action);
    default:
      return state;
  }
};

export default authReducer;

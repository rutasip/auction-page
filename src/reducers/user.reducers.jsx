import { loginActions, registerActions } from 'actions/user.actions';

export const userAuthentication = (state = { loggedIn: false }, action) => {
  switch (action.type) {
    case loginActions.REQUEST:
      return { loggingIn: true, loggedIn: false };
    case loginActions.SUCCESS:
      return { loggedIn: true };
    case loginActions.ERROR:
      return { error: action.error, loggedIn: false };
    case loginActions.LOGOUT:
      return { loggedIn: false };
    default:
      return state;
  }
};

export const userRegistration = (state = {}, action) => {
  switch (action.type) {
    case registerActions.REQUEST:
      return { processing: true };
    case registerActions.SUCCESS:
      return { success: true };
    case registerActions.ERROR:
      return { error: action.error };
    default:
      return state;
  }
};

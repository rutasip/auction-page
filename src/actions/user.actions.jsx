import userValidator from 'services/userValidator';

export const loginActions = {
  REQUEST: 'USER_LOGIN_REQUEST',
  SUCCESS: 'USER_LOGIN_SUCCESS',
  ERROR: 'USER_LOGIN_ERROR',

  LOGOUT: 'USER_LOGOUT'
};

export const registerActions = {
  REQUEST: 'USER_REGISTER_REQUEST',
  SUCCESS: 'USER_REGISTER_SUCCESS',
  ERROR: 'USER_REGISTER_ERROR'
};

const logout = () => {
  return { type: loginActions.LOGOUT };
};

const login = (email, password) => {
  const request = user => ({ type: loginActions.REQUEST, user });
  const success = user => ({ type: loginActions.SUCCESS, user });
  const failure = error => ({ type: loginActions.ERROR, error });

  return dispatch => {
    dispatch(request(email));

    if (userValidator.validateLogin(email, password) === false) {
      dispatch(failure('Neteisingi prisijungimo duomenys'));
      return;
    }

    dispatch(success(email));
  };
};

const register = (email, password) => {
  const request = user => ({ type: registerActions.REQUEST, user });
  const success = user => ({ type: registerActions.SUCCESS, user });
  const failure = error => ({ type: registerActions.ERROR, error });

  return dispatch => {
    dispatch(request(email));

    if (userValidator.validateRegister(email, password) === false) {
      dispatch(dispatch(failure('Laukai negali būti tušti')));
      return;
    }

    dispatch(success(email));
  };
};

export const userActions = { login, register, logout };

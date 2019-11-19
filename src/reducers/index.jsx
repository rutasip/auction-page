import { combineReducers } from 'redux';
import { userAuthentication, userRegistration } from 'reducers/user.reducers';

export default combineReducers({
  userAuthentication,
  userRegistration
});

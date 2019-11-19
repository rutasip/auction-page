import { store } from 'storage/store';

function isUserAuthenticated() {
  const { loggedIn } = store.getState().userAuthentication;

  return loggedIn;
}

store.subscribe(isUserAuthenticated);

export default isUserAuthenticated;

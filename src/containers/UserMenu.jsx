import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Guest from 'components/Navigation/UserMenu/Guest';
import LoggedInNavigation from 'containers/LoggedInNavigation';

const UserMenu = ({ loggedIn }) => {
  return loggedIn ? <LoggedInNavigation /> : <Guest />;
};

UserMenu.propTypes = {
  loggedIn: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  const { loggedIn } = state.userAuthentication;

  return { loggedIn };
}

export default connect(mapStateToProps)(UserMenu);

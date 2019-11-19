import { connect } from 'react-redux';
import { userActions } from 'actions';
import LoggedIn from 'components/Navigation/UserMenu/LoggedIn';

const mapDispatchToProps = dispatch => ({
  onLogout: () => {
    dispatch(userActions.logout());
  }
});

export default connect(
  null,
  mapDispatchToProps
)(LoggedIn);

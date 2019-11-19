import React from 'react';

import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { userActions } from 'actions/user.actions';
import LoginForm from 'components/Account/LoginForm';
import EmailInput from 'components/Account/EmailInput';
import PasswordInput from 'components/Account/PasswordInput';
import RememberMeCheckbox from 'components/Account/RememberMeCheckbox';
import LoginButton from 'components/Account/LoginButton';

class AuthenticateUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { email, password } = this.state;
    const { dispatch } = this.props;

    dispatch(userActions.login(email, password));
  }

  render() {
    const { error, loggingIn, loggedIn } = this.props;
    const { email, password } = this.state;

    return (
      <React.Fragment>
        {error && <span style={{ color: 'red' }}>{error}</span>}
        {loggedIn && <span style={{ color: 'green' }}>Logged In</span>}

        <LoginForm onSubmit={this.handleSubmit}>
          <EmailInput onChange={this.handleChange} value={email} />
          <PasswordInput name="password" onChange={this.handleChange} value={password} />
          <RememberMeCheckbox />
          <LoginButton loggingIn={loggingIn} />
        </LoginForm>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn, error, loggedIn } = state.userAuthentication;

  return {
    loggingIn,
    error,
    loggedIn
  };
}

AuthenticateUser.defaultProps = {
  error: null,
  loggedIn: false,
  loggingIn: false
};

AuthenticateUser.propTypes = {
  dispatch: PropTypes.func.isRequired,
  loggingIn: PropTypes.bool,
  error: PropTypes.string,
  loggedIn: PropTypes.bool
};

export default connect(mapStateToProps)(AuthenticateUser);
